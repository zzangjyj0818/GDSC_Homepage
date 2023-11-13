import React, { useRef } from "react";
import Menu from "./components/Menu";
import SectionDiv from "./page/SectionDiv";
import SectionDiv2 from "./page/SectionDiv2";
import SectionDiv3 from "./page/SectionDiv3";
import SectionDiv4 from "./page/SectionDiv4";

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
      <SectionDiv />
      <SectionDiv2 />
      <SectionDiv3 ref={refArr[0]} />
      <SectionDiv4 ref={refArr[1]} />
    </>
  );
};

export default App;
