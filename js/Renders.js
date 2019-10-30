import { escapeSpaces } from "./Helpers.js";

const renderUser = (element, users) => {
  users.forEach(user => {
    let { age, phone, address, category } = user;
    const listData = [
      { name: "age", value: escapeSpaces(age) },
      { name: "phone", value: escapeSpaces(phone) },
      { name: "address", value: escapeSpaces(address) },
      { name: "category", value: escapeSpaces(category) }
    ];

    element.insertAdjacentHTML(
      "beforeend",
      `<my-card
        title="${user.firstName} ${user.lastName}"
        img = ${user.picture}
        list-info = ${JSON.stringify(listData)}
         />`
    );
  });

  !users.length &&
    element.insertAdjacentHTML("beforeend", `<div>Empty Results</div>`);
};

export { renderUser };
