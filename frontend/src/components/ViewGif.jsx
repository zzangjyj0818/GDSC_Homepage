import React from "react";
import "../styles/components/ViewGif.scss";

const ViewGif = ({ link }) => {
  return (
    <div className="ViewGif_Wrapper">
      <img src={link} alt="gif" className="ViewGif_gif"/>
    </div>
  );
};

export default ViewGif;
