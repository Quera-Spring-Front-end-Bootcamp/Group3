function CheckmarkCircleIcon({ color = "#323232" }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.85667 9.35167L10.0042 12.5L16.4 6.10417C15.0833 3.94583 12.7133 2.5 10 2.5C5.8575 2.5 2.5 5.8575 2.5 10C2.5 14.1425 5.8575 17.5 10 17.5C13.86 17.5 17.0358 14.5833 17.4508 10.8333"
        stroke={color}
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default CheckmarkCircleIcon;
