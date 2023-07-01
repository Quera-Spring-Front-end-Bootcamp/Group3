function PlayIcon({ color = "#80C959" }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21 12C21 16.971 16.971 21 12 21C7.029 21 3 16.971 3 12C3 7.029 7.029 3 12 3C16.971 3 21 7.029 21 12Z"
        fill={color}
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.9406 9.05783L14.8226 11.3538C15.3136 11.6438 15.3136 12.3548 14.8226 12.6448L10.9406 14.9408C10.4406 15.2368 9.80859 14.8758 9.80859 14.2948V9.70383C9.80859 9.12283 10.4406 8.76183 10.9406 9.05783V9.05783Z"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default PlayIcon;