import { useEffect, useRef, useState } from "react";
import "jsmind/style/jsmind.css";
import jsMind from "jsmind";
import read from "./util/flieRead";
import "./assets/dom.css";
import Upload from "./components/upload";
export default function Jsdom() {
  const style = { width: "80vw", height: "70vh" };
  const jsmindContainer = useRef(null);
  const jsmindInstance = useRef(null);
  const dom = useRef(null);
  const [mask, setMask] = useState(false); //遮罩层
  const [display, setDisplay] = useState(true); //upload 组件
  const root = { id: "root", isroot: true, topic: "jsMind" };
  // 配置项
  let mind = {
    meta: {
      name: "jsMind-demo-tree",
      author: "hizzgdev@163.com",
      version: "0.2",
    },
    format: "node_array",
    data: [],
  };
  // jsmind run
  const writeMind = () => {
    let options = {
      container: jsmindContainer.current, // Use the ref directly
      editable: true,
      theme: "primary",
      view: {
        line_width: 2,
        line_color: "",
        node_overflow: "hidden",
      },
    };
    if (!jsmindInstance.current) {
      jsmindInstance.current = new jsMind(options);
    }
    jsmindInstance.current.show(mind);
  };
  // 文件处理回调
  const uploadCallback = (file) => {
    read(file).then((ctx) => {
      mind.data = [];
      mind.data.push(root);
      mind.data.push(...ctx);
      // writeMind();
    });
  };
  const clickCallBack = () => {
    setDisplay((v) => !v);
    setMask(true);
  };
  // 上传按钮回调
  const uploadingCallback = () => {
    dom.current.style.display = "block";
    writeMind();
    setMask(false);
    setDisplay((v) => !v);
  };
  const cancleCallback=()=>{
    setDisplay(false)
    setMask(false)
  }
  return (
    <>
      <div className="con">
        <div className="box">
          <button onClick={clickCallBack} className="btn">
            open
          </button>
          <div className="dom" ref={dom}>
            <div className="domcontainer">
              <div className="jsdom">
                <div
                  id="jsmind_container"
                  ref={jsmindContainer}
                  style={style}
                ></div>
              </div>
            </div>
          </div>
          <div
            className={
              display ? "uploadContainer isBlock" : "uploadContainer isNone"
            }
          >
            <Upload
              uploadCallback={uploadCallback}
              uploadingCallback={uploadingCallback}
              clickCallBack={cancleCallback}
            />
          </div>
        </div>
        <div className={mask ? "mask" : null}></div>
      </div>
    </>
  );
}
