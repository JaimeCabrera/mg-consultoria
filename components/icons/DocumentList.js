import * as React from "react";

export default function DocumentList(props) {
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
        <path d="M16.5 15.5v-10a2 2 0 00-2-2h-8a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2zM9.5 7.5h5M6.5 7.5h1M9.5 10.5h5M6.5 10.5h1M9.5 13.5h5M6.5 13.5h1" />
      </g>
    </svg>
  );
}
