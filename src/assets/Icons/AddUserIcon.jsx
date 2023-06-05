function AddUserIcon({ color = "#000000" }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.5002 4.3335C13.9169 5.75016 13.9169 8.00016 12.5002 9.3335C11.0836 10.6668 8.83357 10.7502 7.50024 9.3335C6.1669 7.91683 6.08357 5.66683 7.50024 4.3335C8.9169 3.00016 11.0836 3.00016 12.5002 4.3335"
        stroke={color}
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.33301 16.6665C3.33301 14.5832 4.99967 12.9165 7.08301 12.9165H9.24967"
        stroke={color}
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.5837 17.0832V12.9165"
        stroke={color}
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.5 15.0002H16.6667"
        stroke={color}
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default AddUserIcon;
