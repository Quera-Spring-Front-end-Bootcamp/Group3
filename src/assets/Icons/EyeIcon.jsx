function EyeIcon({ color = "#BDBDBD", width="49",height="50" }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 49 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.29843 26.0346C5.98125 25.4467 5.98125 24.7335 6.29843 24.1457C10.1206 17.077 17.1813 10.9497 24.2419 10.9497C31.3025 10.9497 38.3631 17.077 42.1853 24.1477C42.5025 24.7356 42.5025 25.4487 42.1853 26.0366C38.3631 33.1053 31.3025 39.2325 24.2419 39.2325C17.1813 39.2325 10.1206 33.1053 6.29843 26.0346Z"
        stroke={color}
        strokeWidth="3.0303"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M28.5277 20.8054C30.8945 23.1722 30.8945 27.0096 28.5277 29.3764C26.1609 31.7432 22.3236 31.7432 19.9567 29.3764C17.5899 27.0096 17.5899 23.1722 19.9567 20.8054C22.3236 18.4386 26.1609 18.4386 28.5277 20.8054"
        stroke={color}
        strokeWidth="2.88606"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default EyeIcon;