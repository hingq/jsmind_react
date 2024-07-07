import { useNavigate } from "react-router-dom";
import "./assets/nav.css";
import { useRef } from "react";

export default function Nav() {
  const nav = useRef(null);

  const navigate = useNavigate();
  const toUrl = (url) => {
    if (url === "project" || url === "code") {
      url === "project" && (window.location.href = "https://github.com/hingq");
      url === "code" && (window.location.href = "https://github.com/hingq");
    } else {
      navigate(`/${url}`);
    }
  };
  const clickCallBack = (e) => {
    const url = e.target.getAttribute("data-id");
    if (e.target.classList.contains("inactive")) {
      e.prventDefult();
    } else {
      let pre = e.target.previousElementSibling;
      while (pre !== null) {
        pre.classList.add("inactive");
        pre = pre.previousElementSibling;
      }
      let next = e.target.nextElementSibling;
      while (next !== null) {
        next.classList.add("inactive");
        next = next.nextElementSibling;
      }
      // previousElementSibling
      e.target.classList.add("active");
      nav.current.classList.add("fx-box_rotate");
      e.target.addEventListener("animationend", () => {
        toUrl(url);
      });
    }
  };

  return (
    <>
      <div className="container">
        <nav className="nav clearfix" ref={nav}>
          <button
            className="nav-el"
            id="el-topleft"
            data-id="mind"
            onClick={clickCallBack}
          >
            <span className="icon-location">Analytical</span>
          </button>
          <button
            className="nav-el"
            id="el-topright"
            data-id="Feedback"
            onClick={clickCallBack}
          >
            <span className="icon-cloud">Feedback</span>
          </button>
          <button
            className="nav-el"
            id="el-btmleft"
            data-id="code"
            onClick={clickCallBack}
          >
            <span className="icon-location">get code</span>
          </button>
          <button
            className="nav-el"
            id="el-btmright"
            data-id="project"
            onClick={clickCallBack}
          >
            <span className="icon-search">more Project</span>
          </button>
        </nav>
      </div>
    </>
  );
}
