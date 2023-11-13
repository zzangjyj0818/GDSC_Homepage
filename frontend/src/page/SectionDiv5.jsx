import React, { forwardRef, useState } from "react";
import "../styles/page/SectionDiv5.scss";

const SectionDiv5 = forwardRef((props, ref) => {
  const [curEvent, setCurEvent] = useState(true);
  const [preEvent, setPreEvent] = useState(false);

  const onCurClick = () => {
    setCurEvent(true);
    setPreEvent(false);
  };

  const onPreClick = () => {
    setPreEvent(true);
    setCurEvent(false);
  };

  return (
    <div className="SectionDiv5_Container" ref={ref}>
      <div className="SectionDiv5_Wrapper">
        <div className="SectionDiv5_MainTitle">Event of GDSC SMU</div>
      </div>
      <div className="SelectionDiv5_EventWrapper">
        <div className="SectionDiv5_SectionBox">
          <div
            onClick={() => onCurClick()}
            className={curEvent ? "SectionActive" : "SectionUnactive"}
            style={{ marginRight: "20px" }}
          >
            예정 이벤트
          </div>
          <div
            onClick={() => onPreClick()}
            className={preEvent ? "SectionActive" : "SectionUnactive"}
            style={{ marginLeft: "20px" }}
          >
            지난 이벤트
          </div>
        </div>
        <div className="EventBox">
            
        </div>
      </div>
    </div>
  );
});

export default SectionDiv5;
