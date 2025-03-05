import hljs from "../highlight";
import { randomString } from "../randomChar";
const languages = ["js", "ts", "html", "css", "json", "cpp", "c"];
export default class Reader {
  constructor(string) {
    this.hljs = hljs;
    this.idArray = [];
    this.primalText = string;
    this.lines = this.splitByLine(string);
  }

  splitByLine(text) {
    return text.split("\n");
  }

  run() {
    let readerIndex = 0;
    const hasParse = [];
    let tempStr = "";
    let nextLine = null;

    while (readerIndex < this.lines.length) {
      const line = this.lines[readerIndex];
      const parser = new Parser(line);

      if (parser.isEmptyLine()) {
        hasParse.push({ Context: "<br>", tag: "br" });
        readerIndex++;
        continue;
      }

      if (parser.isHead()) {
        const headingLevel = parser.getHeadingLevel();
        tempStr = line.replace(parser.heading, "");
        const _id = randomString();
        const tag = `h${headingLevel}`;
        if (headingLevel === 1 || headingLevel === 2) {
          this.idArray.push({ id: _id, tag, name: tempStr });
        }
        hasParse.push({
          Context: `<${tag} id="${_id}">${tempStr}</${tag}>`,
          tag,
        });
        readerIndex++;
        continue;
      }

      if (parser.isHr()) {
        hasParse.push({ Context: "<hr>", tag: "hr" });
        readerIndex++;
        continue;
      }

      if (parser.isBlockQuote()) {
        tempStr = line.replace(parser.blockQuote, "");

        nextLine = this.lines[readerIndex + 1];
        while (nextLine && new Parser(nextLine).isBlockQuote()) {
          tempStr += `<p>${nextLine.replace(
            new Parser(nextLine).blockQuote,
            ""
          )}</p>\n`;
          readerIndex++;
          nextLine = this.lines[readerIndex + 1];
        }
        hasParse.push({
          Context: `<blockquote ><p>${tempStr}</p></blockquote>`,
          tag: "blockquote",
        });
        readerIndex++;
        continue;
      }

      if (parser.isUnorderedList()) {
        tempStr = line.replace(parser.unorderedList, "");
        nextLine = this.lines[readerIndex + 1];
        while (nextLine && new Parser(nextLine).isUnorderedList()) {
          tempStr += `<li>${nextLine.replace(
            new Parser(nextLine).unorderedList,
            ""
          )}</li>\n`;
          readerIndex++;
          nextLine = this.lines[readerIndex + 1];
        }
        hasParse.push({ Context: `<ul><li>${tempStr}</li></ul>\n`, tag: "ul" });
        readerIndex++;
        continue;
      }

      if (parser.isOrderedList()) {
        tempStr = line.replace(parser.orderedList, "");
        nextLine = this.lines[readerIndex + 1];
        while (nextLine && new Parser(nextLine).isOrderedList()) {
          tempStr += `<li>${nextLine.replace(
            new Parser(nextLine).orderedList,
            ""
          )}</li>\n`;
          readerIndex++;
          nextLine = this.lines[readerIndex + 1];
        }
        hasParse.push({ Context: `<ol><li>${tempStr}</li></ol>\n`, tag: "ol" });
        readerIndex++;
        continue;
      }

      if (parser.isCodeBlock()) {
        let lang = parser.getCodeBlockLanguage() || "plaintext";
        if (!languages.includes(lang)) {
          lang = "javascript";
        }
        tempStr = `<pre><code class="language-${lang}">`;
        nextLine = this.lines[readerIndex + 1];
        while (
          nextLine &&
          !new Parser(nextLine).isCodeBlock() &&
          readerIndex + 1 < this.lines.length
        ) {
          const highlighted = this.hljs.highlight(nextLine, { language: lang });
          tempStr += `${highlighted.value}\n`;
          readerIndex++;
          nextLine = this.lines[readerIndex + 1];
        }
        tempStr += "</code></pre>\n";
        hasParse.push({ Context: tempStr, tag: "code" });
        readerIndex += 2;
        continue;
      }

      if (parser.isLink()) {
        tempStr = parser.parseLink(line);
        hasParse.push({ Context: tempStr, tag: "link" });
        readerIndex++;
        continue;
      }
      if (parser.isEmphasics()) {
        tempStr = parser.parseEmphasis(line);
        hasParse.push({ Context: tempStr, tag: "strong" });
        readerIndex++;
        continue;
      }

      readerIndex++;
    }
    return hasParse;
  }

  gethtml() {
    return this.run()
      .map((item) => item.Context)
      .join("");
  }

  getId() {
    return this.idArray;
  }
}

class Parser {
  constructor(line) {
    this.line = line;
    this.heading = /^(#{1,6})\s/;
    this.hr = /^(\*{3,}|-{3,})$/;
    this.blockQuote = /^(>\s+)/;
    this.unorderedList = /^((\*|-)\s+)/;
    this.orderedList = /^(\d+\.\s+)/;
    this.codeBlock = /^(```)/;
    this.link = /\[(.*?)\]\((.*?)\)/g;
    // 突出强调
    this.emphasis = /\*\*(.*?)\*\*/g;
  }

  isEmptyLine() {
    return !this.line.trim();
  }
  isEmphasics() {
    return this.line.includes("**");
  }
  isHead() {
    return this.heading.test(this.line);
  }

  getHeadingLevel() {
    const match = this.line.match(this.heading);
    return match ? match[1].length : 0;
  }

  isHr() {
    return this.hr.test(this.line);
  }

  isBlockQuote() {
    return this.blockQuote.test(this.line);
  }

  isUnorderedList() {
    return this.unorderedList.test(this.line);
  }

  isOrderedList() {
    return this.orderedList.test(this.line);
  }

  isCodeBlock() {
    return this.codeBlock.test(this.line);
  }

  isLink() {
    return this.link.test(this.line);
  }

  getCodeBlockLanguage() {
    const match = this.line.match(/^```(\w+)/);
    return match ? match[1] : null;
  }
  parseEmphasis(str) {
    return str.replace(this.emphasis, "<strong>$1</strong>");
  }
  parseLink(str) {
    return str.replace(
      this.link,
      (_, text, url) =>
        `<a onclick="window.open('${url}', '_blank'); return false;">${text}</a>`
    );
  }
}
