import { useLoaderData, useOutlet, useParams } from "react-router-dom";
import "../assets/detail.css";
import { Outlet } from "react-router-dom";
import { code } from "../util/code";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
// 侧边栏
const closeList = () => {
  const nav = document.querySelectorAll(".nav ");
  nav.forEach((nav_el) => nav_el.classList.remove("visible"));
};
const openList = () => {
  const nav = document.querySelectorAll(".nav");

  nav.forEach((nav_el) => nav_el.classList.add("visible"));
};
let flag = true;
const tabClick = () => {
  if (flag) {
    flag = false;
    document.querySelector(".nav-btn").classList.add("cross");
    openList();
  } else {
    flag = true;
    document.querySelector(".nav-btn").classList.remove("cross");
    closeList();
  }
};
export default function Detail() {
  const params = useParams();
  document.title = params.code;
  useEffect(() => {
    // 侧边栏

    const open_btn = document.querySelector(".open-btn");
    const close_btn = document.querySelector(".close-btn");
    // open_btn.addEventListener("click", () => {
    //   openList();
    // });

    // close_btn.addEventListener("click", () => {
    //   closeList();
    // });
  }, []);

  return (
    <>
      <div className="layout">
        <div className="left">
          <div className="nav-btn open-btn flex" onClick={() => tabClick()}>
            <svg id="icon" viewBox="0 0 800 600">
              <path
                d="M300,220 C300,220 520,220 540,220 C740,220 640,540 520,420 C440,340 300,200 300,200"
                id="top"
              ></path>
              <path d="M300,320 L540,320" id="middle"></path>
              <path
                d="M300,210 C300,210 520,210 540,210 C740,210 640,530 520,410 C440,330 300,190 300,190"
                id="bottom"
                transform="translate(480, 320) scale(1, -1) translate(-480, -318) "
              ></path>
            </svg>
          </div>
          <div className="nav-container">
            <div className=" nav  nav-black">
              <div className="nav  nav-red">
                <div className="nav  nav-white">
                  <div className="cloase-btn-con">
                    {/* <div className="nav-btn close-btn cross" onClick={() => tabClick('close')}>
                      <svg id="icon" viewBox="0 0 800 600">
                        <path
                          d="M300,220 C300,220 520,220 540,220 C740,220 640,540 520,420 C440,340 300,200 300,200"
                          id="top"
                        ></path>
                        <path d="M300,320 L540,320" id="middle"></path>
                        <path
                          d="M300,210 C300,210 520,210 540,210 C740,210 640,530 520,410 C440,330 300,190 300,190"
                          id="bottom"
                          transform="translate(480, 320) scale(1, -1) translate(-480, -318) "
                        ></path>
                      </svg>
                    </div> */}
                  </div>
                  <div className="side">
                    {code.map((item, index) => {
                      return (
                        <div className="link" key={index}>
                          <span>
                            <Link to={`/detail/${item}`} relative="path">
                              {item}
                            </Link>
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="center flex">
          <div className="header">
            <h1>{params.code}</h1>
          </div>

          <Outlet></Outlet>
        </div>
      </div>
    </>
  );
}
