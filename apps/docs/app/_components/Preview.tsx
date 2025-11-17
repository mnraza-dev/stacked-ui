"use client";

import { useState, ReactNode } from "react";

interface PreviewProps {
  children: ReactNode;
  code?: string; 
}

export const Preview = ({ children, code }: PreviewProps) => {
  const [showCode, setShowCode] = useState(false);

  return (
    <div className="border rounded-lg p-4 bg-neutral-700 shadow-sm">
      <div>{children}</div>

      <button
        className="text-sm text-blue-600 mt-2"
        onClick={() => setShowCode(!showCode)}
      >
        {showCode ? "Hide Code" : "Show Code"}
      </button>

      {showCode && (
        <pre className="bg-gray-100 p-4 mt-2 rounded text-sm overflow-x-auto">
          {code ? code : String(children)}
        </pre>
      )}
    </div>
  );
};
