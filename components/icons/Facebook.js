import * as React from "react";

export default function Facebook(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      width={50}
      height={50}
      {...props}
    >
      <radialGradient
        id="prefix__a"
        cx={32}
        cy={31.5}
        r={31.259}
        gradientUnits="userSpaceOnUse"
        spreadMethod="reflect"
      >
        <stop offset={0} stopColor="#c5f1ff" />
        <stop offset={0.35} stopColor="#cdf3ff" />
        <stop offset={0.907} stopColor="#e4faff" />
        <stop offset={1} stopColor="#e9fbff" />
      </radialGradient>
      <path
        fill="url(#prefix__a)"
        d="M58 54a2 2 0 110-4h2.5c1.925 0 3.5-1.575 3.5-3.5S62.425 43 60.5 43H50a2.5 2.5 0 110-5h8c1.65 0 3-1.35 3-3s-1.35-3-3-3H42v-6h18c2.335 0 4.22-2.028 3.979-4.41-.209-2.076-2.082-3.59-4.168-3.59H58a2 2 0 110-4h.357c1.308 0 2.499-.941 2.63-2.242A2.5 2.5 0 0058.5 9h-14a1.5 1.5 0 010-3h3.857c1.308 0 2.499-.941 2.63-2.242A2.5 2.5 0 0048.5 1H15.643c-1.308 0-2.499.941-2.63 2.242A2.5 2.5 0 0015.5 6H19a2 2 0 110 4H6.189c-2.086 0-3.958 1.514-4.168 3.59C1.78 15.972 3.665 18 6 18h2.5a3.5 3.5 0 110 7H5.189c-2.086 0-3.958 1.514-4.168 3.59C.78 30.972 2.665 33 5 33h17v11H6c-1.65 0-3 1.35-3 3s1.35 3 3 3a2 2 0 110 4H4.189C2.103 54 .231 55.514.021 57.59-.22 59.972 1.665 62 4 62h53.811c2.086 0 3.958-1.514 4.168-3.59C62.22 56.028 60.335 54 58 54z"
      />
      <linearGradient
        id="prefix__b"
        x1={32}
        x2={32}
        y1={61.521}
        y2={17.521}
        gradientUnits="userSpaceOnUse"
        spreadMethod="reflect"
      >
        <stop offset={0} stopColor="#155cde" />
        <stop offset={0.278} stopColor="#1f7fe5" />
        <stop offset={0.569} stopColor="#279ceb" />
        <stop offset={0.82} stopColor="#2cafef" />
        <stop offset={1} stopColor="#2eb5f0" />
      </linearGradient>
      <path
        fill="url(#prefix__b)"
        d="M50 12H14a4 4 0 00-4 4v36a4 4 0 004 4h36a4 4 0 004-4V16a4 4 0 00-4-4z"
      />
      <path
        fill="#fff"
        d="M44.4 35H41v15a1 1 0 01-1 1h-4a1 1 0 01-1-1V35h-3a1 1 0 01-1-1v-3a1 1 0 011-1h3v-3.069C35.005 22.582 36.812 20 41.936 20H45a1 1 0 011 1v3a1 1 0 01-1 1h-1.874C41.131 25 41 25.746 41 27.136V30h4a1 1 0 01.981 1.196l-.6 3A1.001 1.001 0 0144.4 35z"
      />
    </svg>
  );
}
