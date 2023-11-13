import React from "react";
import "../styles/page/SectionDiv2.scss";

const SectionDiv2 = ({ onClick }) => {
  return (
    <div className="SectionDiv2_Container">
      <div className="SectionDiv2_Wrapper">
        <div className="SectionDiv2_TextBox">
          <div className="SectionDiv2_Head">WE ARE GDSC</div>
          <div className="SectionDiv2_Middle">
            GDSC(Google Developer Student Club)는 구글 개발자 기술에 관심이 있는
            학생들을 위한 대학 기반의 커뮤니티 그룹입니다.
          </div>
          <div className="SectionDiv2_Middle">
            개발자로서의 성장에 관심이 있는 모든 학부 학생들을 환영합니다.
          </div>
          <div className="SectionDiv2_Middle">
            GDSC에 가입함으로써 능력을 향상시키고 지역 사회와 커뮤니티를 위한
            다양한 솔루션을 구축할 수 있습니다.
          </div>
        </div>
        <button className="SectionDiv2_Button" onClick={() => onClick(1)}>
          더 알아보기
        </button>
      </div>
    </div>
  );
};

export default SectionDiv2;
