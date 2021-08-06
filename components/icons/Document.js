import * as React from "react";

export default function Document(props) {
  return (
    <svg
      height={88}
      viewBox="0 0 21 21"
      width={88}
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
        <path d="M16.5 15.5v-7l-5-5h-5a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2zM6.5 10.5h5M6.5 12.5h7M6.5 14.5h3" />
        <path d="M11.5 3.5v3a2 2 0 002 2h3" />
      </g>
    </svg>
  );
}
