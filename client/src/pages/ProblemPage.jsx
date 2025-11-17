import { useState } from "react";
import Playground from "../components/layout/Playground";
import Console from "../components/ui/Console";
import { codeApi } from "../api/codeApi";

const problemData = {
  title: "Format Sentence",
  description: `
You are given a messy sentence as a string.  
Your task is to write a function:

    formatSentence(str)

that performs the following operations:

1. Capitalize the first letter of each sentence.
2. Remove extra spaces between words.
3. Normalize multiple punctuation marks (!!!, ???, .. → .).
4. Ensure every sentence ends with a valid period ".".
5. Preserve words inside quotes (" ").
6. If the input string is empty, return "".
`,

  input: `"   hello    world!!    this is   javascript??   "`,
  output: `"Hello world. This is javascript."`,

  constraints: `
- Input will always be a string.
- Do not use regex cheats that fully solve everything in one line.
- Avoid using any libraries.
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
  const handleRunCode = async (e) => {
    e.preventDefault();
    try {
      const response = await codeApi.post("/run", { code });
      setCodeOutput(response.data?.output);
    } catch (err) {
      console.error(err);
    }
  };
  const handleResetCode = (e) => {
    e.preventDefault();
    setCode(defaultCode);
    setCodeOutput("");
  };

  return (
    <>
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
      {codeOutput && (<Console label={"code output:"} consoleText={codeOutput} />)}
      <div className="interactions flex gap-2">
        <button
          className="p-3 bg-green-500 text-white rounded my-2"
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
      <Playground code={code} setCode={setCode} />
    </>
  );
}

export default ProblemPage;
