import React from 'react';
import '../styles/components/ViewTextBox.scss';

const ViewTextBox = ({title, text1, text2, text3, hashtag}) => {
    return (
      <div className="ViewTextBox_Wrapper">
        <div className="ViewTextBox_Title">{title}</div>
        <div className="ViewTextBox_Text">{text1}</div>
        <div className="ViewTextBox_Text">{text2}</div>
        <div className="ViewTextBox_Text">{text3}</div>
        <div className="ViewTextBox_HashTag">{hashtag}</div>
      </div>
    );
};

export default ViewTextBox;