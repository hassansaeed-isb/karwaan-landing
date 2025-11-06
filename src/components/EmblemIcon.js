import React from 'react';

const EmblemIcon = ({ className = "h-8 w-8" }) => {
  return (
    <svg 
      width="67" 
      height="72" 
      viewBox="0 0 67 72" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={`emblem-icon ${className}`}
    >
      <path d="M31.0638 38.4169L27.5853 35.1938L27.5552 35.1806H27.6013L65.2306 0H39.0894L14.0487 22.7269L9.34505 26.9794L0.0622602 35.4131H0V72L16.7741 49.86L39.2119 72H67L31.0638 38.4169Z" fill="currentColor"/>
      <mask id="mask0_2004_112" style={{maskType:"luminance"}} maskUnits="userSpaceOnUse" x="0" y="0" width="34" height="31">
        <path d="M0 0H33.4197V30.96H0V0Z" fill="white"/>
      </mask>
      <g mask="url(#mask0_2004_112)">
        <path d="M33.0003 0L0.197266 30.7805V0H33.0003Z" fill="#9F8FFC"/>
      </g>
    </svg>
  );
};

export default EmblemIcon;