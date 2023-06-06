function CircleHalfIcon({ color = "#323232" }) {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="7.5" cy="7.5" r="7" stroke={color} />
      <line
        x1="12.3536"
        y1="2.35355"
        x2="2.35355"
        y2="12.3536"
        stroke={color}
      />
    </svg>
  );
}

export default CircleHalfIcon;
