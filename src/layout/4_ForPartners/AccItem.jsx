import React, { useState, useRef, useEffect } from "react";

const AccItem = ({ question, children }) => {
  const [active, setActive] = useState(false);
  const answerRef = useRef(null);

  useEffect(() => {
    answerRef.current.style.maxHeight = active
      ? `${answerRef.current.scrollHeight}px`
      : "0px";
  }, [answerRef, active]);

  const toogleActive = () => {
    setActive(!active);
  };

  return (
    <div className="item">
      <div className="question" onClick={toogleActive}>
        <p>{question}</p>
        <div className={active ? "toggle active" : "toggle"}>
          <span></span>
          <span></span>
        </div>
      </div>

      <div ref={answerRef} className="answer">
        {children}
      </div>
    </div>
  );
};

export default AccItem;
