import Editor from "@monaco-editor/react";
import nightOwl from "monaco-themes/themes/Night Owl.json";

function Playground({ code, setCode }) {
  return (
    <section
     style={{ background: nightOwl.colors["editor.background"] }}
    className={`w-full h-120 p-5 rounded console`}>
      <h1 className="text-(--t-color)">your code goes here://</h1>

      <Editor
        className="mt-5"
        height="420px"
        language="javascript"
        value={code}
        theme="space-cadet"
        beforeMount={(monaco) => {
          // Define theme BEFORE editor loads
          monaco.editor.defineTheme("space-cadet", {
            base: nightOwl.base,
            inherit: nightOwl.inherit,
            rules: nightOwl.rules,
            colors: nightOwl.colors
          });
        }}
        onChange={(value) => setCode(value ?? "")}
        options={{
          minimap: { enabled: false },
          fontSize: 16,
          wordWrap: "on",
          scrollBeyondLastLine: false,
        }}
      />
    </section>
  );
}

export default Playground;
