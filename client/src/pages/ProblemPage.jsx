import { useEffect, useRef, useState } from "react";
import Playground from "../components/layout/Playground";
import Console from "../components/ui/Console";
import { codeApi } from "../api/codeApi";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { playlistApi } from "../api/playlistApi";
import {useAuth} from "../context/AuthContext"

// const problemData = {
//   title: "Add Two Numbers",

//   description: `
// Write a function:

//     add(a, b)

// that takes **two numbers** and returns **their sum**.

// Example:
// add(3, 5) → 8

// Rules:
// 1. Inputs will always be numbers.
// 2. Return the result directly.
//   `,

//   input: `add(3, 10)`,
//   output: `13`,

//   constraints: `
// - No type conversion allowed.
// - No external libraries.
// - Keep the function simple.
//   `,
// };

// const defaultCode = `
// function formatSentence(str) {
//   return str.trim();
// }
// `;

function ProblemPage() {
  const [defaultCode, setDefaultCode] = useState("");
  const [code, setCode] = useState(defaultCode);
  const [codeOutput, setCodeOutput] = useState(null);
  const [codeTheme, setCodeTheme] = useState("vs-dark");
  const consoleRef = useRef(null);
  const [problemData, setProblemData] = useState(null);

  const { problemId } = useParams();
  const location = useLocation();
  const playlistId = location.state?.playlistId;

  const {user} = useAuth()

  const goTo = useNavigate();

  useEffect(() => {
    const fetchProblem = async () => {
      try {
        const response = await playlistApi.get(`/problem/${problemId}`);
        setProblemData(response.data?.problem);
        setDefaultCode(response.data?.problem?.starterCode);
        // console.log(response.data?.problem?.starterCode);
        // console.log(response.data.problem);
      } catch (err) {
        console.error(err);
      }
    };
    fetchProblem();
  }, [problemId]);

  useEffect(() => {
    setCode(defaultCode);
  }, [defaultCode]);

  const handleRunCode = async (e) => {
    e.preventDefault();
    try {
      const res = await codeApi.post(`/run/${problemId}`, {
        code,
        userId: user._id, // send logged-in user
      });

      setCodeOutput(JSON.stringify(res.data.results, null, 2));

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
      <button
        className="px-3 py-2 rounded text-(--t-color) border border-(--t-color) mb-5"
        onClick={() => goTo(`/quests/${playlistId}`)}
      >
        Go Back
      </button>
      <section className="w-full h-full flex justify-between mb-10">
        <div className="problem">
          <h1 className="text-4xl text-(--ht-color)">
            {problemData?.title} //
          </h1>

          <p className="text-(--t-color) my-5 whitespace-pre-wrap">
            {problemData?.description}
          </p>
        </div>

        <div className="examples">
          <h1 className="text-4xl text-(--ht-color) my-5">Example://</h1>
          <div className="io">
            <Console label={"input:"} consoleText={problemData?.inputExample} />
            <Console
              label={"output:"}
              consoleText={problemData?.outputExample}
            />
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
