import React from 'react';

const KarvaanLogo = ({ className = "h-8 w-auto" }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src="/Emblem.svg" 
        alt="Karvaan Management Systems"
        className="karvaan-logo h-full w-auto"
      />
    </div>
  );
};

export default KarvaanLogo;