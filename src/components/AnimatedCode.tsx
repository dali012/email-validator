"use client";

import { useState, useRef } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import Typewriter from "typewriter-effect";

const codeString = `// Simple API request
const response = await fetch(
  'https://email-validator.dali012.me/api/validate?email=test@example.com',
  {
    headers: {
      'Content-Type': 'application/json',
      "Authorization": "Bearer api_key",
    }
  }
);
`;

export const AnimatedCode = () => {
  const [showFullCode, setShowFullCode] = useState(false);
  const [typedCode, setTypedCode] = useState("");
  const codeContainerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="bg-zinc-900 rounded-lg p-6" ref={codeContainerRef}>
      <div className="flex items-center gap-2 mb-4">
        <div className="h-3 w-3 rounded-full bg-red-500" />
        <div className="h-3 w-3 rounded-full bg-yellow-500" />
        <div className="h-3 w-3 rounded-full bg-green-500" />
      </div>
      <div className="text-sm font-mono relative">
        <SyntaxHighlighter
          language="javascript"
          style={atomDark}
          customStyle={{
            background: "transparent",
            padding: 0,
            margin: 0,
          }}
          wrapLines={true}
          wrapLongLines={true}
        >
          {typedCode}
        </SyntaxHighlighter>
        {!showFullCode && (
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .changeDelay(20)
                .typeString(codeString)
                .callFunction(() => {
                  setShowFullCode(true);
                })
                .start();
            }}
            options={{
              cursor: "▋",
              wrapperClassName: "syntax-highlight",
              onCreateTextNode: (character) => {
                setTypedCode((prev) => prev + character);
                return document.createTextNode(character);
              },
            }}
          />
        )}
      </div>
    </div>
  );
};
