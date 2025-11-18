import Problem from "../models/Problem.js";
import User from "../models/User.js";
import { runUserCode } from "../services/runUserCode.service.js";
import { NodeVM, VMScript } from "vm2";

export const runAndCheck = async (req, res) => {
  try {
    const { code, userId } = req.body;
    const { problemId } = req.params;

    const problem = await Problem.findById(problemId);
    const testCases = problem.testCases;

    // 1️⃣ User console output (Run Code button)
    const runResult = await runUserCode(code);

    // 2️⃣ Load user's functions inside VM2
    const vm = new NodeVM({
      console: "inherit",
      sandbox: {},
      eval: false,
      wasm: false
    });

    // auto-detect all function names user created
    const fnNames = [...code.matchAll(/function\s+([A-Za-z0-9_]+)\s*\(/g)]
      .map(m => m[1]);

    const fn = fnNames[0]; // main function

    // wrap user code so export works
    const wrappedCode = `
      ${code}
      module.exports = { ${fnNames.join(", ")} };
    `;

    const userExports = vm.run(new VMScript(wrappedCode));

    let results = [];
    let allPassed = true;

    for (const tc of testCases) {
      let got = "";
      let passed = false;

      try {
        // 1️⃣ STRING PROBLEM → compress("aaabb")
        const strMatch = tc.input.match(/"(.*?)"/);
        if (strMatch) {
          got = userExports[fn](strMatch[1]).toString();
          passed = got === tc.output;
          results.push({ input: tc.input, expected: tc.output, got, passed });
          if (!passed) allPassed = false;
          continue;
        }

        // 2️⃣ Extract all numbers from input
        const nums = tc.input.match(/-?\d+/g)?.map(Number) || [];

        // 3️⃣ ARRAY PROBLEM → maxInArray([1,2,3]), contains([..], 2)
        if (tc.input.includes("[")) {
          if (nums.length > 1 && tc.input.includes(",")) {
            // contains([...], value)
            const arrPart = tc.input.match(/\[(.*?)\]/)[1];
            const arrNums = arrPart.split(",").map(n => Number(n.trim()));
            const lastNum = nums[nums.length - 1];

            got = userExports[fn](arrNums, lastNum).toString();
          } else {
            // maxInArray([...])
            got = userExports[fn](nums).toString();
          }
        } 
        else {
          // 4️⃣ SCALAR PROBLEM → add(2,3)
          got = userExports[fn](...nums).toString();
        }
      } catch (err) {
        got = "error";
      }

      passed = got === tc.output;

      results.push({
        input: tc.input,
        expected: tc.output,
        got,
        passed
      });

      if (!passed) allPassed = false;
    }

    // SAVE IF ALL PASSED
    if (allPassed) {
      await User.findByIdAndUpdate(userId, {
        $addToSet: { solvedProblems: problemId }
      });
    }

    res.json({
      userOutput: runResult.userOutput,
      results,
      allPassed
    });

  } catch (err) {
    console.error("🔥 ERROR:", err);
    res.status(500).json({ error: err.message });
  }
};
