import React, { RefObject } from "react";

export default function LineNumber(props: {
  lineNumbers: number;
  ref?: RefObject<HTMLDivElement | null>;
  className?: string;
}) {
  return (
    <div
      className={`flex min-w-8 flex-col text-xs align-text-top text-right bg-gray-800 text-gray-400 select-none px-2 py-0.5 font-mono ${props.className}`}
      ref={props.ref}
    >
      {Array.from(Array(props.lineNumbers).keys()).map((i) => (
        <span className="leading-5" key={i}>
          {i + 1}
        </span>
      ))}
    </div>
  );
}
