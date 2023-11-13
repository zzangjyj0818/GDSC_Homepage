import React, { forwardRef, useState } from "react";
import "../styles/page/SectionDiv5.scss";
import events from "../data/event.json";

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

  const currentDate = new Date(); // 현재 날짜를 가져옵니다.

  const upcomingEvents = events.filter((event) => {
    const eventDate = new Date(event.date);
    return eventDate >= currentDate; // 이벤트 날짜가 현재 날짜 이후인 경우
  });

  const pastEvents = events.filter((event) => {
    const eventDate = new Date(event.date);
    return eventDate < currentDate; // 이벤트 날짜가 현재 날짜 이전인 경우
  });

  const diffdays = (date) => {
    const eventDate = new Date(date);
    const diffTime = Math.abs(eventDate - currentDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays
  }

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
          >
            예정 이벤트
          </div>
          <div
            onClick={() => onPreClick()}
            className={preEvent ? "SectionActive" : "SectionUnactive"}
          >
            지난 이벤트
          </div>
        </div>
        <div className="EventBox">
          {curEvent
            ? upcomingEvents.map((data) => (
                <div className="Event_Detail">
                  <div className="Detail_Top">
                    <div className="Detail_Top_Type">{data.type}</div>
                    <div className="Detail_Top_diff">
                      D-{diffdays(data.date)}
                    </div>
                  </div>
                  <div className="Detail_Mid">
                    <div className="Detail_Mid_title">{data.title}</div>
                    <div className="Detail_Mid_Speaker">
                      Speaker : {data.people}
                    </div>
                  </div>
                  <div className="Detail_Bottom">
                    <div className="Detail_Bottom_Time">{data.date}</div>
                    <div className="Detail_Bottom_Time">{data.time}</div>
                  </div>
                </div>
              ))
            : pastEvents.map((data) => (
                <div className="Event_Detail">
                  <div className="Detail_Top">
                    <div className="Detail_Top_Type">{data.type}</div>
                    <div className="Detail_Top_diff">
                      {diffdays(data.date)}일 전
                    </div>
                  </div>
                  <div className="Detail_Mid">
                    <div className="Detail_Mid_title">{data.title}</div>
                    <div className="Detail_Mid_Speaker">
                      Speaker : {data.people}
                    </div>
                  </div>
                  <div className="Detail_Bottom">
                    <div className="Detail_Bottom_Time">{data.date}</div>
                    <div className="Detail_Bottom_Time">{data.time}</div>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
});

export default SectionDiv5;
