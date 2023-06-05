function PlusIcon({ color = "#323232", width = "20", height = "20" }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.2093 5.4082V13.2047"
        stroke={color}
        strokeWidth="1.20907"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.3773 9.30662H6.04395"
        stroke={color}
        strokeWidth="1.20907"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default PlusIcon;
