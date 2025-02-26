import axios, { formToJSON } from "axios";
import "../assets/search.css";
import "../assets/slider.css";
import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "../assets/star.css";
// const dict = {
//   _000: "五言律诗",
//   _010: "五言绝句",
//   _011: "七言律诗",
//   _100: "七言绝句",
//   _101: "free",
//   _110: "theme",
// };

/**
 *
 * 登录，jwt
 * history,list
 * card,诗歌呈现
 *
 */
let request = {
  type: "110",
  key: "",
};
function GenerPoem() {
  const search = useRef(null);
  const input = useRef(null);
  const [poemList, setpoemList] = useState([]);
  const token = useSelector((state) => state.login.token);

  const navigator = useNavigate();
  const [score, setScore] = useState(0);

  const getPoem = async () => {
    try {
      request.key = input.current.value;
      setpoemList([]); // 清空现有列表

      const response = await axios.get(
        `http://127.0.0.1:5000/poem?type=${request.type}&key=${request.key}&user=he`
      );
      let newPoemList = [];
      if (request.type == "110") {
        newPoemList = response.data.split("。");
      } else {
        newPoemList = response.data.split("\n");
      }
      newPoemList = newPoemList
        .filter((item) => item.trim()) // 过滤空字符串
        .map((item) => item.trim());

      setpoemList(newPoemList);
      if (poemList) {
        axios
          .get(
            `http://127.0.0.1:5000/score?key=${
              request.key
            }&poem=${poemList.join("")}`
          )
          .then((res) => {
            setScore(Object.entries(res.data));
          });
      }
    } catch (error) {
      console.error("获取诗歌失败:", error);
      // 可以添加错误提示
    }
  };

  function loading() {
    search.current.classList.add("loading");
    getPoem();

    setTimeout(function () {
      search.current.classList.remove("loading");
    }, 1500);
  }
  useEffect(() => {
    if (!token) {
      navigator("/login");
    }
  }, [token]);
  useEffect(() => {}, []);
  return (
    <>
      <div className="searchContainer">
        <Slider></Slider>
        <Nav></Nav>

        <div className="bodyContainer">
          <div id="search" ref={search}>
            <input
              id="input"
              placeholder="Stand on the shouder of giants"
              ref={input}
              onKeyDown={(e) => {
                if (e.key == "Enter") loading();
              }}
            />
            <button id="button" onClick={loading}>
              <i className="fa fa-search"></i>
            </button>
            <div className="spinner">
              <i className="fa fa-spinner"></i>
            </div>
          </div>
          <div className="note">Click the button or hit enter.</div>
          <div className="result">
            <Card poem={poemList} score={score}></Card>
          </div>
        </div>
      </div>
    </>
  );
}

function Nav() {
  function animation() {
    const navElement = document.querySelector("nav");

    const activeElement = document.createElement("div");
    activeElement.classList.add("active-element");

    const getOffsetLeft = (element) => {
      const elementRect = element.getBoundingClientRect();

      return (
        elementRect.left -
        navElement.getBoundingClientRect().left +
        (elementRect.width - activeElement.offsetWidth) / 2
      );
    };

    navElement.appendChild(activeElement);

    const activeButton = navElement.querySelector("ul li.active button");

    document.fonts.ready.then(() => {
      gsap.set(activeElement, {
        x: getOffsetLeft(activeButton),
      });
      gsap.to(activeElement, {
        "--active-element-show": "1",
        duration: 0.2,
      });
    });

    navElement.querySelectorAll("ul li button").forEach((button, index) => {
      button.addEventListener("click", () => {
        const active = navElement.querySelector("ul li.active");
        const oldIndex = [...active.parentElement.children].indexOf(active);

        if (
          index === oldIndex ||
          navElement.classList.contains("before") ||
          navElement.classList.contains("after")
        ) {
          return;
        }

        const x = getOffsetLeft(button);
        const direction = index > oldIndex ? "after" : "before";
        const spacing = Math.abs(x - getOffsetLeft(active));

        navElement.classList.add(direction);
        active.classList.remove("active");
        button.parentElement.classList.add("active");

        gsap.set(activeElement, {
          rotateY: direction === "before" ? "180deg" : "0deg",
        });

        gsap.to(activeElement, {
          keyframes: [
            {
              "--active-element-width": `${
                spacing > navElement.offsetWidth - 60
                  ? navElement.offsetWidth - 60
                  : spacing
              }px`,
              duration: 0.3,
              ease: "none",
              onStart: () => {
                gsap.to(activeElement, {
                  "--active-element-opacity": 1,
                  duration: 0.1,
                });
              },
            },
            {
              "--active-element-scale-x": "0",
              "--active-element-scale-y": ".25",
              "--active-element-width": "0px",
              duration: 0.3,
              onStart: () => {
                gsap.to(activeElement, {
                  "--active-element-mask-position": "40%",
                  duration: 0.5,
                });
                gsap.to(activeElement, {
                  "--active-element-opacity": 0,
                  delay: 0.45,
                  duration: 0.25,
                });
              },
              onComplete: () => {
                activeElement.innerHTML = "";
                navElement.classList.remove("before", "after");
                activeElement.removeAttribute("style");
                gsap.set(activeElement, {
                  x: getOffsetLeft(button),
                  "--active-element-show": "1",
                });
              },
            },
          ],
        });

        gsap.to(activeElement, {
          x,
          "--active-element-strike-x": "-50%",
          duration: 0.6,
          ease: "none",
        });
      });
    });
  }
  useEffect(() => {
    animation();
  }, []);
  const clickFunction = (e) => {
    const model = e.target.getAttribute("model");
    request.type = model;
  };
  return (
    <nav>
      <ul>
        <li className="active">
          <button model="110" onClick={clickFunction}>
            主题模式
          </button>
        </li>
        <li>
          <button model="010" onClick={clickFunction}>
            五言绝句
          </button>
        </li>
        <li>
          <button model="100" onClick={clickFunction}>
            七言绝句
          </button>
        </li>
        <li>
          <button model="011" onClick={clickFunction}>
            ChatGPt-5言
          </button>
        </li>
        <li>
          <button model="101" onClick={clickFunction}>
            ChatGPt-7言
          </button>
        </li>
      </ul>
    </nav>
  );
}

function Card({ score, poem }) {
  if (poem.length === 0) {
    return <></>;
  } else {

    return (
      <>
        <div className="body">
          <div id="upload" className="modal" data-state="0" data-ready="false">
            <div className="modal__header">
              <button className="modal__close-button" type="button">
                <svg
                  className="modal__close-icon"
                  viewBox="0 0 16 16"
                  width="16px"
                  height="16px"
                  aria-hidden="true"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  >
                    <polyline points="1,1 15,15" />
                    <polyline points="15,1 1,15" />
                  </g>
                </svg>
                <span className="modal__sr">Close</span>
              </button>
            </div>
            <div className="modal__body">
              <div className="poemContainer">
                {poem.map(
                  (item, index) =>
                    (item = item
                      .split(",")
                      .map((item, index) => <p key={index}>{item}</p>))
                )}
              </div>

              <div className="score">
                {score &&
                  score.map((item, index) => (
                    <div key={index}>
                      <span>{item[0]}</span>
                      <div className="scoreContainer">
                        <Score key={index} vv={item[1]}></Score>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

function Slider() {
  return (
    <>
      <div className="all">
        <div className="box">
          <Link to={"/login"}>
            <div className="card bg-03">
              <span className="card-content"> 登录</span>
            </div>
          </Link>
        </div>
        <div className="box">
          <Link to={"/history"}>
            <div className="card bg-04">
              <span className="card-content">历史记录</span>
            </div>
          </Link>
        </div>
        <div className="box">
          <Link to={"/generpoem"}>
            <div className="card bg-05">
              <span className="card-content"> 诗歌生成</span>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

function Score({ vv }) {
  const rating = useRef(null);
  //截取小数点后两位
  vv = vv.toFixed(2);
  useEffect(() => {
    rating.current.setAttribute("data-rating", vv);
    document.querySelectorAll("input").forEach((input) => {
      input.checked = true;
    });
  }, []);
  return (
    <>
      <div class="star-rating">
        <div class="stars">
          <label class="number">
            <input type="checkbox" name="rating" value="0" />
          </label>
          <label class="star">
            <input type="checkbox" name="rating" value="1" />
          </label>
          <label class="star">
            <input type="checkbox" name="rating" value="2" />
          </label>
          <label class="star">
            <input type="checkbox" name="rating" value="3" />
          </label>
          <label class="star">
            <input type="checkbox" name="rating" value="4" />
          </label>
          <label class="star">
            <input type="checkbox" name="rating" value="5" />
          </label>
          <div class="number-rating" ref={rating} data-rating="1"></div>
        </div>
      </div>
    </>
  );
}

export default GenerPoem;
