import { escapeSpaces } from "./Helpers.js";

const renderUser = (element, user) => {
  let { age, phone, address, category } = user;
  const listData = [
    { name: "age", value: escapeSpaces(age) },
    { name: "phone", value: escapeSpaces(phone) },
    { name: "address", value: escapeSpaces(address) },
    { name: "category", value: escapeSpaces(category) }
  ];

  document.querySelector(element).insertAdjacentHTML(
    "beforeend",
    `<my-card
        title="${user.firstName} ${user.lastName}"
        img = ${user.picture}
        list-info = ${JSON.stringify(listData)}
         />`
  );
};

export { renderUser };
