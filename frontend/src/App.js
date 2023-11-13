import React, { useRef } from "react";
import Menu from "./components/Menu";
import SectionDiv from "./page/SectionDiv";
import SectionDiv2 from "./page/SectionDiv2";
import SectionDiv3 from "./page/SectionDiv3";
import SectionDiv4 from "./page/SectionDiv4";
import SectionDiv5 from "./page/SectionDiv5";

const App = () => {
  const focusFirst = useRef(null);
  const focusSecond = useRef(null);
  const focusThird = useRef(null);
  const focusFourth = useRef(null);

  const refArr = [focusFirst, focusSecond, focusThird, focusFourth];

  const onMoveToFocus = (focus) => {
    refArr[focus].current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <Menu onClick={onMoveToFocus} />
      <SectionDiv ref={refArr[0]} />
      <SectionDiv2 onClick={onMoveToFocus}/>
      <SectionDiv3 ref={refArr[1]} />
      <SectionDiv4 ref={refArr[2]} />
      <SectionDiv5 ref={refArr[3]} />
    </>
  );
};

export default App;
