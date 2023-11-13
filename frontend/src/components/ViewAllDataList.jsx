import React from "react";
import ViewGif from "../components/ViewGif";
import ViewTextBox from "../components/ViewTextBox";
import "../styles/components/ViewDataList.scss";

const ViewDataList = ({ datas }) => {
  return (
    <div className="DataList_All">
      {datas.map((data) =>
        data.gif !== undefined ? (
          <ViewGif link={data.gif} key={data.id}/>
        ) : (
          <ViewTextBox
            key={data.id}
            title={data.title}
            text1={data.text1}
            text2={data.text2}
            text3={data.text3}
            hashtag={data.hashtag}
          />
        )
      )}
    </div>
  );
};

export default ViewDataList;
