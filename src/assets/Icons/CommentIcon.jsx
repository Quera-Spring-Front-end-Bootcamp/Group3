function CommentIcon({ color = "#323232" }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.9998 3.99658C7.02777 3.99658 2.99609 7.35666 2.99609 11.4968C3.07125 13.9951 4.4491 16.2717 6.62761 17.497C6.41121 18.085 6.11031 18.6384 5.73437 19.1398C5.52688 19.4427 5.53201 19.8433 5.7472 20.1409C5.96238 20.4384 6.34125 20.5687 6.69393 20.4665C7.89676 20.1163 9.02892 19.558 10.039 18.817C10.6856 18.9382 11.342 18.9985 11.9998 18.997C16.9719 18.997 21.0036 15.6369 21.0036 11.4968C21.0036 7.35667 16.9719 3.99658 11.9998 3.99658Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.99902 9.99923H15.0015"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.99902 13.0007H12.0003"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default CommentIcon;
