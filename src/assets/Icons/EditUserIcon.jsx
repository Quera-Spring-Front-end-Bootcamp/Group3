function EditUserIcon({ color = "#323232" }) {
  return (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.0005 5.7C16.7005 7.4 16.7005 10.1 15.0005 11.7C13.3005 13.3 10.6005 13.4 9.00048 11.7C7.40048 10 7.30048 7.3 9.00048 5.7C10.7005 4.1 13.3005 4.1 15.0005 5.7"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 20.5C4 18 6 16 8.5 16H11.1"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14 21.5H16.3L19.7 18.1C20.1 17.7 20.1 17.1 19.7 16.7L18.8 15.8C18.4 15.4 17.8 15.4 17.4 15.8L14 19.2V21.5V21.5H14Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default EditUserIcon;
