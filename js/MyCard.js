import { unEscapeSpaces } from "./Helpers.js";

export class MyCard extends HTMLElement {
  constructor() {
    super();
  }

  getAttrVal(attr) {
    return this.getAttribute(attr) || "N/A";
  }

  getListData(items) {
    return JSON.parse(items)
      .map(item => {
        let { name, value } = item;
        return `<div class="info-wrapper">
        <div class="name">${unEscapeSpaces(name)}</div>
        <div class="value">${unEscapeSpaces(value)}</div>
       </div>`;
      })
      .join("");
  }

  connectedCallback() {
    const imgVal = this.getAttrVal("img");
    const imgHtmlElement =
      imgVal === "N/A"
        ? ""
        : `<div class="card-image"><img src="${imgVal}"></div>`;
    const htmlContent = `<div class="card user">
      ${imgHtmlElement}
      <div class="card-details">
      <div class="card-title">${this.getAttrVal("title")}</div>
      ${this.getListData(this.getAttrVal("list-info"))}
        </div>
      </div>
    </div>`;

    this.innerHTML = htmlContent;
  }

  disconnectedCallback() {
    // browser calls this method when the element is removed from the document
    // (can be called many times if an element is repeatedly added/removed)
  }
}
