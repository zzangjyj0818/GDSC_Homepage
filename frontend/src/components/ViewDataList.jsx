import React from 'react';
import ViewGif from "../components/ViewGif";
import ViewTextBox from "../components/ViewTextBox";
import '../styles/components/ViewDataList.scss';

const ViewAllDataList = ({datas}) => {
    return (
      <div className={datas[0].gif !== undefined ? 'DataList_Right' : 'DataList_Left'}>
        {datas.map((data) =>
          data.gif !== undefined ? (
            <ViewGif link={data.gif} />
          ) : (
            <ViewTextBox
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

export default ViewAllDataList;