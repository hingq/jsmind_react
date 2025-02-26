import "../assets/upload.css";

function Feedback() {
  return (
    <>
      <div className="feedback">
        <div id="upload" className="modal" data-state="0" data-ready="false">
          <div className="modal__header">Contact me</div>
          <div className="modal__body">
            <p>
              Contact me by email or submit an issue on
              <a href="http://github/hingq">github</a>
            </p>
            <a href="mailto:try.ashore@gmail.com">
              email: try.ashore@gmail.com
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Feedback;
