import { useEffect, useState } from "react";
import "../assets/history.css";
import axios from "axios";

function History() {
  const [list,setList]=useState([]);
    const getHistory = () => {
      axios.get("http://127.0.0.1:5000/history?user=he").then((res) => {
        setList(res.data);
      }); 
    }

  useEffect(() => {
    getHistory();
  },[]);
  return (
    <>
      <div className="zt">
        <div className="zt_top">
          <div className="swiper2">
            <div className="swiper-pagination"></div>
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div
                  className="sw_fixed"
                  style={{ backgroundColor: "#f7ffdf" }}
                >
                  <div>时间</div>
                  <div>内容</div>

                </div>
              </div>

            </div>
          </div>

           <div className="swiper1">
            <div className="swiper-pagination"></div>
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <ul className="forecast_list">
                  {list.map((item, index) => (
                    <li key={index}>
                      <div>{item.time}</div>
                      <div style={{ letterSpacing: "2px" }}>{item.history.join(", ")}</div>
                  </li>
                  ))}

                </ul>
              </div>
              {/* <div className="swiper-slide">
                <ul className="forecast_list">
                  <li>
                    <div>项目3</div>
                    <div>21-09-30</div>
                    <div>21-06-30</div>
                    <div>21-03-31</div>
                  </li>
                  <li>
                    <div>NOPLAT</div>
                    <div>393.08</div>
                    <div>259.44</div>
                    <div>146.95</div>
                  </li>
                  <li>
                    <div>122</div>
                    <div>367.52</div>
                    <div>217.19</div>
                    <div>-14.84</div>
                  </li>
                  <li>
                    <div>666</div>
                    <div>-42.66</div>
                    <div>-38.71</div>
                    <div>-14.23</div>
                  </li>
                  <li>
                    <div>777</div>
                    <div>-265.28</div>
                    <div>-264.08</div>
                    <div>-0.41</div>
                  </li>
                  <li>
                    <div>888</div>
                    <div>84.59%</div>
                    <div>48.39%</div>
                    <div>-4.59%</div>
                  </li>
                  <li>
                    <div>122</div>
                    <div>367.52</div>
                    <div>217.19</div>
                    <div>-14.84</div>
                  </li>
                  <li>
                    <div>666</div>
                    <div>-42.66</div>
                    <div>-38.71</div>
                    <div>-14.23</div>
                  </li>
                  <li>
                    <div>777</div>
                    <div>-265.28</div>
                    <div>-264.08</div>
                    <div>-0.41</div>
                  </li>
                  <li>
                    <div>888</div>
                    <div>84.59%</div>
                    <div>48.39%</div>
                    <div>-4.59%</div>
                  </li>
                  <li>
                    <div>122</div>
                    <div>367.52</div>
                    <div>217.19</div>
                    <div>-14.84</div>
                  </li>
                  <li>
                    <div>666</div>
                    <div>-42.66</div>
                    <div>-38.71</div>
                    <div>-14.23</div>
                  </li>
                  <li>
                    <div>777</div>
                    <div>-265.28</div>
                    <div>-264.08</div>
                    <div>-0.41</div>
                  </li>
                  <li>
                    <div>888</div>
                    <div>84.59%</div>
                    <div>48.39%</div>
                    <div>-4.59%</div>
                  </li>
                </ul>
              </div> */}
            </div>
          </div> 
        </div>
      </div>
    </>
  );
}

export default History;
