import React from 'react';
import styled from 'styled-components'

const ScrollSnapWrap = styled.div`
  scroll-snap-type: y mandatory;
  height: 100vh;
  overflow-y: scroll;
`;

const SnapDiv = styled.div`
  scroll-snap-align: start;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  border: 5px solid red;
  text-align: center;
  font-size: 100px;
`;

const App = () => {
  return (
    <>
      <ScrollSnapWrap>
        <SnapDiv>1</SnapDiv>
        <SnapDiv>2</SnapDiv>
        <SnapDiv>3</SnapDiv>
        <SnapDiv>4</SnapDiv>
        <SnapDiv>5</SnapDiv>
      </ScrollSnapWrap>
    </>
  );
};

export default App;