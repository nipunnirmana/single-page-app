const url = "./js/user.js";
fetch(url)
  .then(resp => resp.json())
  .then(function(data) {
    data.users.forEach(user => {
      let { age, phone, address, category } = user;
      const listData = [
        { name: "age", value: escapeSpaces(age) },
        { name: "phone", value: escapeSpaces(phone) },
        { name: "address", value: escapeSpaces(address) },
        { name: "category", value: escapeSpaces(category) }
      ];
      document.querySelector("#test").insertAdjacentHTML(
        "beforeend",
        `<my-card
          title="${user.firstName} ${user.lastName}"
          img = ${user.picture}
          list-info = ${JSON.stringify(listData)}
           />`
      );
    });
  })
  .catch(function(error) {
    console.error("Error Fetching User Data", error);
  });

const escapeSpaces = str =>
  str
    .toString()
    .split(" ")
    .join("*--");

const unEscapeSpaces = str =>
  str
    .toString()
    .split("*--")
    .join(" ");

class MyCard extends HTMLElement {
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

customElements.define("my-card", MyCard);
