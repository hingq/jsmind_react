import "../assets/upload.css";
import { UploadModal } from ".";
import { useEffect, useRef } from "react";

// eslint-disable-next-line react/prop-types
function Upload({ uploadCallback, uploadingCallback,clickCallBack }) {
  let modal = useRef(null);
  const uploadFile = () => {
    modal.current = new UploadModal("#upload");
    modal.current.upload(uploadingCallback);
    // 上传点击回调
    // 文件读取回调
    modal.current.fileCallback(uploadCallback);
    // 拖拽回调
    const dropFunc = (e) => {
      e.preventDefault();
      modal.current.fileHandle(e);
    };

    modal.current.drop(dropFunc);
  };
  const clickCallback=()=>{
    clickCallBack(false)
  }
  useEffect(() => {
    uploadFile();
    return () => {
      // Ensure the modal is properly removed when the component is unmounted
      modal.current.remove();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <div id="upload" className="modal" data-state="0" data-ready="false">
        <div className="modal__header">
          <button className="modal__close-button" type="button" onClick={clickCallback}>
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
          <div className="modal__col">
            {/* <!-- up --> */}
            <svg
              className="modal__icon modal__icon--blue"
              viewBox="0 0 24 24"
              width="24px"
              height="24px"
              aria-hidden="true"
            >
              <g
                fill="none"
                stroke="hsl(223,90%,50%)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle
                  className="modal__icon-sdo69"
                  cx="12"
                  cy="12"
                  r="11"
                  strokeDasharray="69.12 69.12"
                />
                <polyline
                  className="modal__icon-sdo14"
                  points="7 12 12 7 17 12"
                  strokeDasharray="14.2 14.2"
                />
                <line
                  className="modal__icon-sdo10"
                  x1="12"
                  y1="7"
                  x2="12"
                  y2="17"
                  strokeDasharray="10 10"
                />
              </g>
            </svg>
            {/* <!-- error --> */}
            <svg
              className="modal__icon modal__icon--red"
              viewBox="0 0 24 24"
              width="24px"
              height="24px"
              aria-hidden="true"
              display="none"
            >
              <g
                fill="none"
                stroke="hsl(3,90%,50%)"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <circle
                  className="modal__icon-sdo69"
                  cx="12"
                  cy="12"
                  r="11"
                  strokeDasharray="69.12 69.12"
                />
                <line
                  className="modal__icon-sdo14"
                  x1="7"
                  y1="7"
                  x2="17"
                  y2="17"
                  strokeDasharray="14.2 14.2"
                />
                <line
                  className="modal__icon-sdo14"
                  x1="17"
                  y1="7"
                  x2="7"
                  y2="17"
                  strokeDasharray="14.2 14.2"
                />
              </g>
            </svg>
            {/* <!-- check --> */}
            <svg
              className="modal__icon modal__icon--green"
              viewBox="0 0 24 24"
              width="24px"
              height="24px"
              aria-hidden="true"
              display="none"
            >
              <g
                fill="none"
                stroke="hsl(138,90%,50%)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle
                  className="modal__icon-sdo69"
                  cx="12"
                  cy="12"
                  r="11"
                  strokeDasharray="69.12 69.12"
                />
                <polyline
                  className="modal__icon-sdo14"
                  points="7 12.5 10 15.5 17 8.5"
                  strokeDasharray="14.2 14.2"
                />
              </g>
            </svg>
          </div>
          <div className="modal__col">
            <div className="modal__content">
              <h2 className="modal__title">Analytical a Makedown File</h2>
              <p className="modal__message">
                Select or drag a file to Analytical from your computer or
                device.
              </p>
              <div className="modal__actions">
                <button
                  className="modal__button modal__button--upload"
                  type="button"
                  data-action="file"
                >
                  Choose File
                </button>
                <input id="file" type="file" hidden />
              </div>
              <div className="modal__actions" hidden>
                <svg
                  className="modal__file-icon"
                  viewBox="0 0 24 24"
                  width="24px"
                  height="24px"
                  aria-hidden="true"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polygon points="4 1 12 1 20 8 20 23 4 23" />
                    <polyline points="12 1 12 8 20 8" />
                  </g>
                </svg>
                <div className="modal__file" data-file></div>
                {/* remove */}
                <button
                  className="modal__close-button"
                  type="button"
                  data-action="fileReset"
                >
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
                      <polyline points="4,4 12,12" />
                      <polyline points="12,4 4,12" />
                    </g>
                  </svg>
                  <span className="modal__sr">Remove</span>
                </button>

                {/* upload */}
                <button
                  className="modal__button"
                  type="button"
                  data-action="upload"
                >
                  Upload
                </button>
              </div>
            </div>

            {/* reault */}
            <div className="modal__content" hidden>
              <h2 className="modal__title">Uploading…</h2>
              <p className="modal__message">
                Just give us a moment to process your file.
              </p>
              <div className="modal__actions">
                <div className="modal__progress">
                  <div className="modal__progress-value" data-progress-value>
                    0%
                  </div>
                  <div className="modal__progress-bar">
                    <div
                      className="modal__progress-fill"
                      data-progress-fill
                    ></div>
                  </div>
                </div>
                <button
                  className="modal__button"
                  type="button"
                  data-action="cancel"
                >
                  Cancel
                </button>
              </div>
            </div>
            <div className="modal__content" hidden>
              <h2 className="modal__title">Oops!</h2>
              <p className="modal__message">
                Your file could not be uploaded due to an error. Try uploading
                it again?
              </p>
              <div className="modal__actions modal__actions--center">
                <button
                  className="modal__button"
                  type="button"
                  data-action="upload"
                >
                  Retry
                </button>
                <button
                  className="modal__button"
                  type="button"
                  data-action="cancel"
                >
                  Cancel
                </button>
              </div>
            </div>
            <div className="modal__content" hidden>
              <h2 className="modal__title">Upload Successful!</h2>
              <p className="modal__message">
                Your file has been uploaded. You can copy the link to your
                clipboard.
              </p>
              <div className="modal__actions modal__actions--center">
                <button
                  className="modal__button"
                  type="button"
                  data-action="copy"
                >
                  Copy Link
                </button>
                <button
                  className="modal__button"
                  type="button"
                  data-action="cancel"
                >
                  Done
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Upload;
