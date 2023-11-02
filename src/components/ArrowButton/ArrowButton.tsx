import React from "react";

type ArrowButtonProps = {
  arrow: string;
};

const ArrowButton = ({ arrow }: ArrowButtonProps) => {
  return (
    <div>
      <img src={arrow} alt="arrow" />
    </div>
  );
};
export default ArrowButton;
