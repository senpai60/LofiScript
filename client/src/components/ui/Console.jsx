import React from "react";

function Console({ label, consoleText }) {
  return (
    <>
      <h1 className="text-(--ht-color) block capitalize text-2xl mb-2">
        {label}
      </h1>

      <div className="bg-(--accent-color) px-5 py-3 rounded-md overflow-x-auto inline-block mb-10">
        <pre className="text-(--t-color) whitespace-pre-wrap font-mono text-sm leading-relaxed">
          {consoleText}
        </pre>
      </div>
    </>
  );
}

export default Console;
