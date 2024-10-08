import React from "react";

const Image: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M14.5 8.75C15.1904 8.75 15.75 8.19036 15.75 7.5C15.75 6.80964 15.1904 6.25 14.5 6.25C13.8096 6.25 13.25 6.80964 13.25 7.5C13.25 8.19036 13.8096 8.75 14.5 8.75Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 5C2 3.34315 3.34315 2 5 2H19C20.6569 2 22 3.34315 22 5V19C22 20.6569 20.6569 22 19 22H5C3.34315 22 2 20.6569 2 19V5ZM5 4C4.44772 4 4 4.44772 4 5V13.4091L7.62328 9.45643C8.06638 8.97304 8.84701 9.03979 9.20161 9.59139L11.7588 13.5692C12.4149 14.5899 13.8215 14.7959 14.7427 14.0062L15.7969 13.1027C16.1936 12.7626 16.7853 12.7853 17.1548 13.1548L20 16V5C20 4.44772 19.5523 4 19 4H5Z"
        fill="currentColor"
      />
    </svg>
  );
};

Image.displayName = "ImageIcon";
export default Image;
