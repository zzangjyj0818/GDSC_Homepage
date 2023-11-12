import React from 'react';
import '../styles/page/SectionDiv.scss';
import VideoUrl from "../assets/a.video/pc1920p-video.mp4";
import Bottom from "../assets/c.image/Bottom Image.png";

const SectionDiv = () => {
    return (
      <div className="SectionDiv_Container">
        <div className="SectionDiv_Wrapepr">
          <video muted autoPlay loop className="SectionDiv_Video">
            <source src={VideoUrl} type="video/mp4" />
          </video>
          <div className="SectionDiv_Image_Box">
            <img src={Bottom} alt="bottom" className="SectionDiv_Image" />
          </div>
        </div>
      </div>
    );
};

export default SectionDiv;