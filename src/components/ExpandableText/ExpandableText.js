import React, { useState, useRef } from "react";

export const ExpandableText = ({
  children,
  className,
  buttonStyle,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const contentEl = useRef(null);
  const innerContentEl = useRef(null);

  return (
    <div className={className}>
      <div
        className='expandable-text__content'
        ref={contentEl}
        style={{
          maxHeight: isExpanded ? "100%" : 110,
          overflow: "hidden",
        }}>
        <div
          ref={innerContentEl}
          className='expandable-text__inner-content'>
          {children}
        </div>
      </div>

      <button
        style={buttonStyle}
        onClick={() => {
          setIsExpanded(!isExpanded);
        }}>
        {!isExpanded ? "Ver más" : "Ver menos"}
      </button>
    </div>
  );
};

export default ExpandableText;
