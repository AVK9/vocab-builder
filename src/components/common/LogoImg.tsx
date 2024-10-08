import React from 'react';

interface MyLogoProps {
  color?: string;
  className?: string;
}

export const MyLogo: React.FC<MyLogoProps> = ({ color, className }) => (
  <svg
    width="36"
    height="36"
    viewBox="0 0 36 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <circle
      cx="18"
      cy="18"
      r="18"
      fill={color === 'white' ? '#FCFCFC' : '#85AA9F'}
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M17.9504 16.6667C23.2339 12.6817 23.4672 10.2667 17.9504 6C12.3284 10.3577 13.053 12.6675 17.9504 16.6667ZM16.6667 18.0504C12.6817 12.7669 10.2667 12.5337 6 18.0504C10.3577 23.6724 12.6675 22.9478 16.6667 18.0504ZM29.9998 18.0504C26.0149 12.7669 23.5998 12.5337 19.3331 18.0504C23.6908 23.6724 26.0006 22.9478 29.9998 18.0504ZM17.9504 29.9997C23.2339 26.0148 23.4672 23.5997 17.9504 19.333C12.3284 23.6907 13.053 26.0005 17.9504 29.9997Z"
      fill={color === 'white' ? '#85AA9F' : '#FCFCFC'}
    />
  </svg>
);
