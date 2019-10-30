import { unEscapeSpaces } from "./Helpers.js";

export class MyCard extends HTMLElement {
  constructor() {
    super();
  }

  getAttrVal(attr) {
    // Retunrs Custom element attribute data
    return this.getAttribute(attr) || "N/A";
  }

  getListData(items) {
    // Creating html elements based on available data
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
    // Render Custom HTML Element
    const imgVal = this.getAttrVal("img");
    let escalateVal = this.getAttrVal("escalate");

    if (escalateVal !== "N/A") {
      escalateVal = JSON.parse(escalateVal);
    } else {
      escalateVal = { staff: [] };
    }

    // Conditionally render img tag only if available

    const imgHtmlElement =
      imgVal === "N/A"
        ? ""
        : `<div class="card-image"><img src="${imgVal}"></div>`;

    // Conditionally render Escalate data only if available

    const escalateHtmlElement = !escalateVal.staff.length
      ? ""
      : `<div class='escalate'>
        <div class='escalate-title'>Escalate</div>
        ${escalateVal.staff
          .map(staff => {
            return `<div class='escalate-user'>${staff}</div>`;
          })
          .join("")} </div>`;

    const htmlContent = `<div class="card user">
      ${imgHtmlElement}
      <div class="card-details">
      <div class="card-title">${this.getAttrVal("title")}</div>
      ${this.getListData(this.getAttrVal("list-info"))}
        </div>
        ${escalateHtmlElement}
      </div>
    </div>`;

    this.innerHTML = htmlContent;
  }
}
