import React from "react";
import logoSVG from "../assets/img_icon/Logo.svg";
import ArrowButton from "./ArrowButton/ArrowButton";
const Footer = () => {
  const onScrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <footer className="footer">
      <div className="footer__container">
        <img className="footer_logo" src={logoSVG} alt="logo" />
        <div className="footer__content">
          <a
            href="https://github.com/DenysKoliak11"
            target="_blank"
            rel="noopener noreferrer"
          >
            github
          </a>
          <a href="/">contacts</a>
          <a href="/">rights</a>
        </div>
        <div className="footer__btn" onClick={onScrollUp}>
          <span>Back to top</span>
          <ArrowButton arrow="/_new/img/Arrow-Top.svg" />
        </div>
      </div>
    </footer>
  );
};
export default Footer;
