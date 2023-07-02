function FlagDashedCircleIcon({ color = "#C1C1C1",width="50",
height="50" }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.4223 36.0299V15.1108"
        stroke={color}
        strokeWidth="2.3897"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M33.5776 27.4757V15.1963"
        stroke={color}
        strokeWidth="2.3897"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.4209 27.4505C16.4209 27.4505 17.4932 26.5596 20.7101 26.5596C23.927 26.5596 26.0716 28.676 29.2885 28.676C32.5054 28.676 33.5777 27.4787 33.5777 27.4787"
        stroke={color}
        strokeWidth="2.3897"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.4209 15.1124C16.4209 15.1124 17.4932 13.9702 20.7101 13.9702C23.927 13.9702 26.0716 16.0866 29.2885 16.0866C32.5054 16.0866 33.5777 15.1957 33.5777 15.1957"
        stroke={color}
        strokeWidth="2.3897"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect
        x="0.694444"
        y="0.694444"
        width="48.6111"
        height="48.6111"
        rx="24.3056"
        stroke={color}
        strokeWidth="1.38889"
        strokeDasharray="2.78 2.78"
      />
    </svg>
  );
}

export default FlagDashedCircleIcon;