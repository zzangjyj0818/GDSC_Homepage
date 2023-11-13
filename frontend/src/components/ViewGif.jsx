import React, { useEffect, useRef } from "react";
import "../styles/components/ViewGif.scss";

const ViewGif = ({ link }) => {
  const gifRef = useRef(null); 
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // 요소가 뷰포트에 보이면, 'visible' 클래스를 추가합니다.
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        } else {
          entry.target.classList.remove("visible");
        }
      });
    });
    if (gifRef.current) {
      observer.observe(gifRef.current);
    }

    return () => {
      if (gifRef.current) {
        observer.unobserve(gifRef.current);
      }
    };
  }, []);

  return (
    <div className="ViewGif_Wrapper">
      <img
        ref={gifRef}
        src={link}
        alt="gif"
        className='ViewGif_gif'
      />
    </div>
  );
};

export default ViewGif;
