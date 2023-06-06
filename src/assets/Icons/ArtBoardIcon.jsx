function ArtBoardIcon({ color = "#323232" }) {
  return (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 6.5V18.5C3 20.1569 4.34315 21.5 6 21.5H18C19.6569 21.5 21 20.1569 21 18.5V6.5C21 4.84315 19.6569 3.5 18 3.5H6C4.34315 3.5 3 4.84315 3 6.5Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 21.4996V9.55957"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21 9.55957H11C9.89543 9.55957 9 10.455 9 11.5596V21.4996"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21 15.5596H9"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default ArtBoardIcon;
