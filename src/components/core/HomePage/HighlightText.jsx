import React from "react";

const HighlightText = ({text}) => {
  return (
    <span className="text-black bg-clip-text font-bold">
      {" "}
      {text}
    </span>
  );
};

export default HighlightText;
