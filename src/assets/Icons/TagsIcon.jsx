function TagsIcon({ color = "#000000" }) {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.5255 12.7268C11.7011 12.9025 11.7011 13.1873 11.5255 13.3629C11.3499 13.5385 11.0651 13.5385 10.8894 13.3629C10.7138 13.1873 10.7138 12.9025 10.8894 12.7268C11.0651 12.5512 11.3499 12.5512 11.5255 12.7268"
        stroke={color}
        strokeWidth="1.83824"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.6444 8.00236L23.4802 16.8381C24.4262 17.7842 24.4262 19.3185 23.4802 20.2646L18.4262 25.3185C17.4802 26.2646 15.9458 26.2646 14.9998 25.3185L6.16399 16.4828C5.93727 16.256 5.80859 15.9472 5.80859 15.6261V8.85898C5.80859 8.18986 6.35149 7.64697 7.0206 7.64697H13.789C14.1101 7.64697 14.4177 7.77442 14.6444 8.00236V8.00236Z"
        stroke={color}
        strokeWidth="1.83824"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24.1912 12.5486L16.2182 4.67732C15.7586 4.22389 15.141 3.97021 14.4964 3.97021H9.48535"
        stroke={color}
        strokeWidth="1.83824"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default TagsIcon;
