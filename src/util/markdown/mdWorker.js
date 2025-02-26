import Reader from "./parser";


self.onmessage = function (e) {
  
  const { markdown } = e.data;
  const reader = new Reader(markdown);
  self.postMessage({ _html: reader.gethtml(), idArray: reader.getId() });
};
