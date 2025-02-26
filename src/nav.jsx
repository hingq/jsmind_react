import { useNavigate } from "react-router-dom";
import "./assets/nav.css";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
export default function Nav() {
  const nav = useRef(null);
  const { t } = useTranslation();
  const navigate = useNavigate();
  const toUrl = (url) => {
    
    navigate(`/${url}`);
  };
  function addClass(el) {
    let pre = el.previousElementSibling;
    while (pre !== null) {
      pre.classList.add("inactive");
      pre = pre.previousElementSibling;
    }
    let next = el.nextElementSibling;
    while (next !== null) {
      next.classList.add("inactive");
      next = next.nextElementSibling;
    }
  }
  function removeClass(el) {
    let pre = el.previousElementSibling;
    while (pre !== null) {
      pre.classList.remove("inactive");
      pre = pre.previousElementSibling;
    }
    let next = el.nextElementSibling;
    while (next !== null) {
      next.classList.remove("inactive");
      next = next.nextElementSibling;
    }
  }
  const clickCallBack = (e) => {
    const _this = e.target;
   const url= _this.getAttribute("data-id")===null?( _this.parentElement.getAttribute("data-id")):(_this.getAttribute('data-id'));
    
    if (url === "project") {
      window.open(`https://github.com/hingq/`);
      return;
    }

    if (_this.classList.contains("inactive")) {
      removeClass(_this);
      nav.current.classList.remove("fx-box_rotate");
    } else {
      nav.current.classList.add("fx-box_rotate");

      addClass(_this);
      // previousElementSibling
      _this.classList.add("active");

      toUrl(url);
      _this.addEventListener("animationend", () => {
       
        nav.current.classList.remove("fx-box_rotate");
        removeClass(_this);
        _this.classList.remove("active");
      });
    }
  };

  return (
    <>
      <div className="container">
        <nav className="nav_main clearfix" ref={nav}>
          <button
            className="nav-el"
            id="el-topleft"
            data-id="mind"
            onClick={clickCallBack}
          >
            <span className="icon-location">{t("nav.Analytical")}</span>
          </button>
          <button
            className="nav-el"
            id="el-topright"
            data-id="Feedback"
            onClick={clickCallBack}
          >
            <span className="icon-cloud">{t("nav.Feedback")}</span>
          </button>
          <button
            className="nav-el"
            id="el-btmleft"
            data-id="code"
            onClick={clickCallBack}
          >
            <span className="icon-location">{t("nav.markdown")}</span>
          </button>
          <button
            className="nav-el"
            id="el-btmright"
            data-id="project"
            onClick={clickCallBack}
          >
            <span className="icon-search">{t("nav.Project")}</span>
          </button>
        </nav>
      </div>
    </>
  );
}
