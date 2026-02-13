import React from "react";

const Container = ({ children, className }) => {
  return (
    <div className={`w-full max-w-[1000px] mx-auto m-2 rounded-2xl ${className}`}>
      {children}
    </div>
  );
};

export default Container;
