import { NodeVM, VMScript } from "vm2";

export const runUserCode = async (code) => {
  try {
    let output = "";

    const vm = new NodeVM({
      console: "redirect",
      timeout: 2000,
      sandbox: {},
      eval: false,
      wasm: false,
    });

    vm.on("console.log", (msg) => (output += msg + "\n"));

    const script = new VMScript(code);
    const executed = vm.run(script);

    return {
      userOutput: output.trim(),
      executed
    };
  } catch (err) {
    return {
      userOutput: "error: " + err.message,
      executed: null
    };
  }
};
