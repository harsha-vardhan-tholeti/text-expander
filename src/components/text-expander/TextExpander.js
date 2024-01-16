import React, { useState } from "react";

function TextExpander({
  children,
  collapsedNumWords = 10,
  expandButtonText = "Show more",
  collapseButtonText = "Show less",
  buttonColor = "blue",
  expanded = false,
}) {
  const [toggle, setToggle] = useState(expanded);

  const handleToggle = () => {
    setToggle((open) => !open);
  };

  const collapsedWords =
    children.split(" ").slice(0, collapsedNumWords).join(" ") + "...";

  const buttonStyle = {
    fontSize: "16px",
    marginLeft: "6px",
    border: "none",
    background: "none",
    color: buttonColor,
  };

  return (
    <div className="box">
      {toggle ? children : collapsedWords}
      <button onClick={handleToggle} style={buttonStyle}>
        {!toggle ? expandButtonText : collapseButtonText}
      </button>
    </div>
  );
}

export default TextExpander;
