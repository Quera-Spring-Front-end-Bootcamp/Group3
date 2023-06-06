function TagDashedCircleIcon({ color = "#C1C1C1" }) {
  return (
    <svg
      width="50"
      height="50"
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.5255 22.7268C21.7011 22.9025 21.7011 23.1873 21.5255 23.3629C21.3499 23.5385 21.0651 23.5385 20.8894 23.3629C20.7138 23.1873 20.7138 22.9025 20.8894 22.7268C21.0651 22.5512 21.3499 22.5512 21.5255 22.7268"
        stroke={color}
        strokeWidth="1.83824"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24.6444 18.0024L33.4802 26.8381C34.4262 27.7842 34.4262 29.3185 33.4802 30.2646L28.4262 35.3185C27.4802 36.2646 25.9458 36.2646 24.9998 35.3185L16.164 26.4828C15.9373 26.256 15.8086 25.9472 15.8086 25.6261V18.859C15.8086 18.1899 16.3515 17.647 17.0206 17.647H23.789C24.1101 17.647 24.4177 17.7744 24.6444 18.0024V18.0024Z"
        stroke={color}
        strokeWidth="1.83824"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M34.1912 22.5486L26.2182 14.6773C25.7586 14.2239 25.141 13.9702 24.4964 13.9702H19.4854"
        stroke={color}
        strokeWidth="1.83824"
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

export default TagDashedCircleIcon;
