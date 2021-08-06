import * as React from "react";

export default function Checkbox(props) {
  return (
    <svg
      height={80}
      viewBox="0 0 21 21"
      width={80}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g
        fill="none"
        fillRule="evenodd"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M5.5 3.5h10a2 2 0 012 2v10a2 2 0 01-2 2h-10a2 2 0 01-2-2v-10a2 2 0 012-2z" />
        <path d="M7.5 10.5l2 2 4-4" />
      </g>
    </svg>
  );
}
