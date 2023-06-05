function CheckmarkSqureIcon({ color = "#323232" }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.1365 6.74121L7.46711 9.40899L5.8623 7.80899"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect
        x="1.99707"
        y="1.99707"
        width="12.005"
        height="12.005"
        rx="3.33333"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default CheckmarkSqureIcon;
