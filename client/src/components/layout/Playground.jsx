import Editor from "@monaco-editor/react";

function Playground({ code, setCode ,theme}) {
  return (
    <section className="w-full h-120 bg-[#1E1E1E] p-5 rounded console">
      <h1 className="text-(--t-color)">your code goes here://</h1>

      <Editor
        className="mt-5"
        height="420px"
        language="javascript"
        value={code}                 // ⭐ controlled input
        theme={theme}
        onChange={(value) => setCode(value ?? "")}
        options={{
          minimap: { enabled: false },
          fontSize: 16,
          autoClosingBrackets: "always",
          autoClosingQuotes: "always",
          suggestOnTriggerCharacters: true,
          wordWrap: "on",
          scrollBeyondLastLine: false,
        }}
      />
    </section>
  );
}

export default Playground;
