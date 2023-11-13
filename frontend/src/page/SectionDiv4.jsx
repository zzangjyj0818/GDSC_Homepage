import React, { useState, forwardRef } from "react";
import "../styles/page/SectionDiv4.scss";
import { devrels, members } from "../data/dataset";
import insta from '../assets/c.image/instagram.png';
import pf from '../assets/c.image/pf.png';

const SectionDiv4 = forwardRef((props, ref) => {
  const [devrelActive, setDevrelActive] = useState(true);
  const [memberActive, setMemberActive] = useState(false);

  const onDevrelClick = () => {
    setDevrelActive(true);
    setMemberActive(false);
  };

  const onMemberClick = () => {
    setMemberActive(true);
    setDevrelActive(false);
  };
  return (
    <div className="SectionDiv4_Container" ref={ref}>
      <div className="SectionDiv4_Wrapper">
        <div className="SectionDiv4_TextBox">
          <div className="TextBox_Maintitle">People of GDSC SMU</div>
          <div className="TextBox_Subtitle">GDSC SMU를 이끌어가는 사람들</div>
        </div>
        <div className="SectionDiv4_SectionBox">
          <div
            className={devrelActive ? "Select_active" : "Select_unactive"}
            onClick={() => onDevrelClick()}
            style={{marginRight: "6px" }}
          >
            LEAD / CORE
          </div>
          <div
            className={memberActive ? "Select_active" : "Select_unactive"}
            onClick={() => onMemberClick()}
            style={{marginLeft: "6px" }}
          >
            Member
          </div>
        </div>
        <div className="SectionDiv4_InfBox">
          {devrelActive
            ? devrels.map((devrel) => (
                <div className="Inf_Wrapper" key={devrel.id}>
                  <div className="Inf_ImgBox">
                    <img src={devrel.url} alt="img" className="Inf_Img" />
                    <div className="Inf_TextBox">
                      <div className="Inf_name">{devrel.name}</div>
                      <div className="Inf_Position">{devrel.pos}</div>
                      <div></div>
                    </div>
                  </div>
                  <div className="Circle_Box" />
                  <div className="Link_Box">
                    <div style={{ marginRight: "4px" }}>
                      <img src={pf} alt="link" />
                    </div>
                    <div style={{ marginLeft: "4px" }}>
                      <img src={insta} alt="link" />
                    </div>
                  </div>
                </div>
              ))
            : members.map((member) => (
                <div className="Inf_Wrapper" key={member.id}>
                  <div className="Inf_ImgBox">
                    <img src={member.url} alt="img" className="Inf_Img" />
                    <div className="Inf_TextBox">
                      <div className="Inf_name">{member.name}</div>
                      <div className="Inf_Position">{member.pos}</div>
                      <div></div>
                    </div>
                  </div>
                  <div className="Circle_Box" />
                  <div className="Link_Box">
                    <div style={{ marginRight: "4px" }}>
                      <img src={pf} alt="link" />
                    </div>
                    <div style={{ marginLeft: "4px" }}>
                      <img src={insta} alt="link" />
                    </div>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
});

export default SectionDiv4;
