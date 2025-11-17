import { useRef, useState } from "react";
import Playground from "../components/layout/Playground";
import Console from "../components/ui/Console";
import { codeApi } from "../api/codeApi";

const problemData = {
  title: "Add Two Numbers",

  description: `
Write a function:

    add(a, b)

that takes **two numbers** and returns **their sum**.

Example:
add(3, 5) → 8

Rules:
1. Inputs will always be numbers.
2. Return the result directly.
  `,

  input: `add(3, 10)`,
  output: `13`,

  constraints: `
- No type conversion allowed.
- No external libraries.
- Keep the function simple.
  `,
};

const defaultCode = `
function formatSentence(str) {
  return str.trim();
}
`;

function ProblemPage() {
  const [code, setCode] = useState(defaultCode);
  const [codeOutput, setCodeOutput] = useState(null);
  const [codeTheme, setCodeTheme] = useState("vs-dark");
  const consoleRef = useRef(null);

  const handleRunCode = async (e) => {
    e.preventDefault();
    try {
      const response = await codeApi.post("/run", { code });
      setCodeOutput(response.data?.output);

      setTimeout(() => {
        consoleRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 50);
    } catch (err) {
      console.error(err);
    }
  };

  const handleResetCode = (e) => {
    e.preventDefault();
    setCode(defaultCode);
    setCodeOutput("");
  };

  const scrollToConsole = (e) => {};

  return (
    <section className="w-full min-h-screen">
      <section className="w-full h-full flex justify-between mb-10">
        <div className="problem">
          <h1 className="text-4xl text-(--ht-color)">{problemData.title} //</h1>

          <p className="text-(--t-color) my-5 whitespace-pre-wrap">
            {problemData.description}
          </p>
        </div>

        <div className="examples">
          <h1 className="text-4xl text-(--ht-color) my-5">Example://</h1>
          <div className="io">
            <Console label={"input:"} consoleText={problemData.input} />
            <Console label={"output:"} consoleText={problemData.output} />
          </div>
        </div>
      </section>

      <div className="interactions flex justify-between">
        <div className="int-btns flex gap-2">
          <button
            className="p-3 bg-teal-500 text-white rounded my-2"
            onClick={(e) => handleRunCode(e)}
          >
            Run Code
          </button>
          <button
            className="p-3 bg-zinc-500 text-white rounded my-2"
            onClick={(e) => handleResetCode(e)}
          >
            Reset Code
          </button>
        </div>
        <select
          value={codeTheme}
          onChange={(e) => setCodeTheme(e.target.value)}
          className="p-2 bg-zinc-800 text-white rounded my-2 border border-zinc-700"
        >
          <option value="vs-dark">VS Dark</option>
          <option value="light">Light</option>
        </select>
      </div>
      <Playground code={code} setCode={setCode} theme={codeTheme} />
      {codeOutput && (
        <Console
          ref={consoleRef}
          label="code output:"
          consoleText={codeOutput}
          bg="[#1E1E1E]"
          fullWidth={true}
        />
      )}
    </section>
  );
}

export default ProblemPage;
