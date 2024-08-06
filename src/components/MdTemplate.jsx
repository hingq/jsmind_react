import { Link, useLoaderData, useNavigate } from "react-router-dom";
import "../assets/template.css";
import React, { useEffect, useState } from "react";
import markdown from "../assets/markdown/index";
import Reader from "../util/markdown/parser.js";
import "highlight.js/styles/github.css";
import "github-markdown-css";
function MdTemplate() {
  const [htmlContent, setHtmlContent] = useState("");
  const [idArray, setIdArray] = useState([]);
  const code = useLoaderData();
  const navigator = useNavigate();
  document.title = code;
  async function getMd() {
    if (!markdown[code]) navigator("/404");

    const result = await markdown[code]();
    return result;
  }
  useEffect(() => {
    const worker = new Worker(
      new URL("../util/markdown/mdWorker.js", import.meta.url),
      { type: "module" }
    );

    worker.onmessage = function (e) {
      setHtmlContent(e.data._html);
      setIdArray(e.data.idArray);
    };
    worker.onerror = function (e) {
      console.log(e);
    };
    getMd().then((result) => {
      worker.postMessage({ markdown: result.default });
    });
    return () => {
      worker.terminate();
    };
  }, [code]);
  useEffect(() => {
    const handleLinkClick = (event) => {
      event.preventDefault();
      if (event.target.tagName === "A" && event.target.hash) {
        event.preventDefault();
        const targetId = decodeURIComponent(event.target.hash.slice(1));
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    document.addEventListener("click", handleLinkClick);

    return () => {
      document.removeEventListener("click", handleLinkClick);
    };
  }, []);
  return (
    <>
      <div className="markdown">
        <div className="backhome">
          <Link to={"/"}>🏡</Link>
        </div>
        <div
          className="markdown-body"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        ></div>
        <div className="head-link">
          {idArray.map((item, index) => {
            return (
              <span
                key={index}
                className={item.tag === "h1" ? "target large" : "target"}
              >
                <a href={`#${item.id}`}>{item.name}</a>
              </span>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default MdTemplate;
