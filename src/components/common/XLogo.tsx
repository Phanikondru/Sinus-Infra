import React from 'react';

const XLogo = ({ className = "w-5 h-5" }: { className?: string }) => {
  return (
    <svg 
      viewBox="0 0 32 32" 
      className={className}
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_41_404)">
        <mask id="mask0_41_404" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="0" y="0" width="32" height="32">
          <path d="M32 0H0V32H32V0Z" fill="white"/>
        </mask>
        <g mask="url(#mask0_41_404)">
          <path d="M28.25 0H3.75C1.67893 0 0 1.67893 0 3.75V28.25C0 30.3211 1.67893 32 3.75 32H28.25C30.3211 32 32 30.3211 32 28.25V3.75C32 1.67893 30.3211 0 28.25 0Z" fill="currentColor"/>
          <path d="M22.244 6.25H25.552L18.325 14.51L26.827 25.75H20.17L14.956 18.933L8.99 25.75H5.68003L13.41 16.915L5.25403 6.25H12.08L16.793 12.481L22.244 6.25ZM21.083 23.77H22.916L11.084 8.126H9.117L21.083 23.77Z" fill="white"/>
        </g>
      </g>
      <defs>
        <clipPath id="clip0_41_404">
          <rect width="32" height="32" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  );
};

export default XLogo;