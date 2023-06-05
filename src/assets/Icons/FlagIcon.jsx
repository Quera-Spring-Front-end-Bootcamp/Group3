function FlagIcon({ color = "#323232", width = "16", height = "16" }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.33333 14.0001V2.62012"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.6663 9.34699V2.66699"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.33301 9.3333C3.33301 9.3333 3.91634 8.84863 5.66634 8.84863C7.41634 8.84863 8.58301 9.99997 10.333 9.99997C12.083 9.99997 12.6663 9.34863 12.6663 9.34863"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.33301 2.62133C3.33301 2.62133 3.91634 2 5.66634 2C7.41634 2 8.58301 3.15133 10.333 3.15133C12.083 3.15133 12.6663 2.66667 12.6663 2.66667"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default FlagIcon;
