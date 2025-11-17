import React, { forwardRef } from "react";

const Console = forwardRef(function Console(
  { label, consoleText, bg = "(--accent-color)", fullWidth = false },
  ref
) {

  
  return (
    <div ref={ref}>
      <h1 className="text-(--ht-color) block capitalize text-2xl mb-2">
        {label}
      </h1>

      <div
        className={`console px-5 py-3 bg-${bg} rounded-md overflow-x-auto inline-block mb-10 font-bold`}
        style={{
          width: fullWidth ? "100%" : "fit-content",
        }}
      >
        <pre className="text-(--t-color) whitespace-pre-wrap font-mono text-sm leading-relaxed">
          {consoleText}
        </pre>
      </div>
    </div>
  );
});

export default Console;
