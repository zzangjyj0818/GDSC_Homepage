import React, {useState, useEffect, forwardRef} from "react";
import "../styles/page/SectionDiv3.scss";
import { leftdatas, rightdatas, alldatas } from "../data/dataset";
import ViewDataList from "../components/ViewDataList";
import ViewAllDataList from "../components/ViewDataList";

const SectionDiv3 = forwardRef((props, ref) => {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  useEffect(() => {
    const resizeListener = () => {
      setInnerWidth(window.innerWidth);
    };
    window.addEventListener("resize", resizeListener);
  });
//   1350px
  console.log("innerWidth", innerWidth);
  return (
    <div className="SectionDiv3_Container" ref={ref}>
      <div className="SectionDiv3_Wrapper">
        <div className="SectionDiv3_Title">What we do</div>
        <div className="SectionDiv3_Detail">
            {innerWidth > 1350 ? (
            <>
                <ViewDataList datas={leftdatas} />
                <ViewDataList datas={rightdatas} />
            </>) : (
                <ViewAllDataList datas={alldatas} />
            )}
        </div>
      </div>
    </div>
  );
});

export default SectionDiv3;
