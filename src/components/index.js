export class UploadModal {
  constructor(el) {
    this.el = document.querySelector(el);
    this.filename = "";

    this.isCopying = false;
    this.isUploading = false;
    this.progress = 0;
    this.progressTimeout = null;
    this.state = 0;
    this.eventListeners = []; // Initialize

    if (this.el) {
      this.addEvent();
    }
  }

  drop(fn) {
    // drop
    const dropListener = (e) => {
      this.el.classList.remove("drag");
      fn(e);
    };
    this.eventListeners.push({
      element: this.el,
      type: "drop",
      listener: dropListener,
    });
    this.el.addEventListener("drop", dropListener);
  }

  dragHandler(e) {
    this.el.classList.add("drag");
    e.preventDefault();
  }
  addEvent() {
    // button click
    const events = [
      // click
      { element: this.el, type: "click", listener: this.action.bind(this) },
      {
        element: this.el.querySelector("#file"),
        type: "change",
        listener: this.fileHandle.bind(this),
      },
      {
        element: this.el,
        type: "dragover",
        listener: this.dragHandler.bind(this),
      },
      {
        element: this.el,
        type: "dragleave",
        listener: this.dragHandler.bind(this),
      },
    ];
    events.forEach(({ element, type, listener }) => {
      if (element) {
        element.addEventListener(type, listener);
        this.eventListeners.push({ element, type, listener });
      }
    });
  }
  action(e) {
    this[e.target?.getAttribute("data-action")]?.();
    this.stateDisplay();
  }
  cancel() {
    this.isUploading = false;
    this.progress = 0;
    this.progressTimeout = null;
    this.state = 0;
    this.stateDisplay();
    this.progressDisplay();
    this.fileReset();
  }
  async copy() {
    const copyButton = this.el?.querySelector("[data-action='copy']");

    if (!this.isCopying && copyButton) {
      // disable
      this.isCopying = true;
      copyButton.style.width = `${copyButton.offsetWidth}px`;
      copyButton.disabled = true;
      copyButton.textContent = "Copied!";
      navigator.clipboard.writeText(this.filename);
      await new Promise((res) => setTimeout(res, 1000));
      // reenable
      this.isCopying = false;
      copyButton.removeAttribute("style");
      copyButton.disabled = false;
      copyButton.textContent = "Copy Link";
    }
  }
  fail() {
    this.isUploading = false;
    this.progress = 0;
    this.progressTimeout = null;
    this.state = 2;
    this.stateDisplay();
  }
  file() {
    this.el?.querySelector("#file").click();
  }
  fileDisplay(name = "") {
    // update the name
    this.filename = name;
  
    const fileValue = this.el?.querySelector("[data-file]");
    if (fileValue) fileValue.textContent = this.filename;

    // show the 
    this.el?.setAttribute("data-ready", this.filename ? "true" : "false");
  }
  fileHandle(e) {
    const  target  = e.dataTransfer?e.dataTransfer:e.target
    const {name}=target.files[0]
    return new Promise(() => {
      if (target?.files.length) {
        this.fileCallback(target.files[0]);
        let reader = new FileReader();
        reader.onload = () => {
          this.fileDisplay(name);
        };
        reader.readAsDataURL(target.files[0]);
      }
    });
  }
  fileCallback(fn = null) {
    typeof fn === "function" ? (this.fileCallback = fn) : "";
  }
  fileReset() {
    console.log('filereastt');
    const fileField = this.el?.querySelector("#file");
    if (fileField) fileField.value = null;

    this.fileDisplay();
  }
  progressDisplay() {
    const progressValue = this.el?.querySelector("[data-progress-value]");
    const progressFill = this.el?.querySelector("[data-progress-fill]");
    const progressTimes100 = Math.floor(this.progress * 100);

    if (progressValue) progressValue.textContent = `${progressTimes100}%`;
    if (progressFill)
      progressFill.style.transform = `translateX(${progressTimes100}%)`;
  }
  async progressLoop() {
    this.progressDisplay();

    if (this.isUploading) {
      if (this.progress === 0) {
        await new Promise((res) => setTimeout(res, 1000));
        // fail randomly
        if (!this.isUploading) {
          return;
        } else if (Utils.randomInt(0, 2) === 0) {
          this.fail();
          return;
        }
      }
      // …or continue with progress
      if (this.progress < 1) {
        this.progress += 0.01;
        this.progressTimeout = setTimeout(this.progressLoop.bind(this), 50);
      } else if (this.progress >= 1) {
        this.progressTimeout = setTimeout(() => {
          if (this.isUploading) {
            this.success();
            this.stateDisplay();
            this.progressTimeout = null;
          }
        }, 250);
      }
    }
  }
  stateDisplay() {
    this.el?.setAttribute("data-state", `${this.state}`);
  }
  success() {
    this.isUploading = false;
    this.state = 3;
    this.stateDisplay();
  }
  upload(fn = null) {
    if (fn) {
      this.upload =()=>{
        fn()
        this.fileReset()
      }
    } else {
      if (!this.isUploading) {
        this.isUploading = true;
        this.progress = 0;
        this.state = 1;
        this.progressLoop();
      }
    }
  }
  remove() {
    this.eventListeners.forEach((listener) => {
      this.el?.removeEventListener("click", listener);
      const fileInput = this.el?.querySelector("#file");
      fileInput?.removeEventListener("change", listener);
    });
  }
}

class Utils {
  static randomInt(min = 0, max = 2 ** 32) {
    const percent = crypto.getRandomValues(new Uint32Array(1))[0] / 2 ** 32;
    const relativeValue = (max - min) * percent;

    return Math.round(min + relativeValue);
  }
}
