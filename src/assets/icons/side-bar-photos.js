// src/assets/icons/PhotosIcon.js

const PhotosIcon = ({ width = 24, height = 24, className = "" }) => (
  <svg
    width={`${width}px`}
    height={`${height}px`}
    className={className}
    viewBox="0 0 24 24"
    fill="black"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 
      2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 
      16H5V5h14v14zm-5-7l-3 3.72L9 13l-3 4h12l-4-5z"
    ></path>
  </svg>
);

export default PhotosIcon;
