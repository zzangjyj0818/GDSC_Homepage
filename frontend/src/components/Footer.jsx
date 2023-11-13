import React from 'react';
import '../styles/components/Footer.scss';
import Logo from "../assets/c.image/GDSC SMU logo.png";
import insta from "../assets/c.image/insta.png";

const Footer = () => {
    return (
      <div className="Footer_Container">
        <div className="Footer_Wrapper">
          <div className="Footer_ImageBox">
            <img src={Logo} alt="logo" className="Footer_Image" />
          </div>
          <div className="Footer_TextBox">
            <div className="TextBox_address">
              충청남도 천안시 동남구 상명대길 31
            </div>
            <div className="TextBox_ContactBox">
              <div
                className="ContactBox_Social"
                style={{ marginRight: "auto" }}
              >
                <div>social</div>
                <div>
                  <img src={insta} alt="insta" className="ContactBox_insta" />
                </div>
              </div>
              <div
                className="ContactBox_Social"
                style={{ marginLeft: "auto" }}
              >
                <div>contact us</div>
                <div>010-0000-0000</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Footer;