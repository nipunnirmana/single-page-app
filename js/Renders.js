import { escapeSpaces } from "./Helpers.js";

const renderUser = (element, users) => {
  users.forEach(user => {
    let { age, phone, address, category, firstName, lastName, picture } = user;
    const listData = [
      { name: "age", value: escapeSpaces(age) },
      { name: "phone", value: escapeSpaces(phone) },
      { name: "address", value: escapeSpaces(address) },
      { name: "category", value: escapeSpaces(category) }
    ];

    element.insertAdjacentHTML(
      "beforeend",
      `<my-card
        title="${firstName} ${lastName}"
        img = ${picture}
        list-info = ${JSON.stringify(listData)}
         />`
    );
  });

  !users.length &&
    element.insertAdjacentHTML("beforeend", `<div>Empty Results</div>`);

  window.scrollTo(0, 0);
};

const renderDebts = (element, debts) => {
  debts.forEach(debt => {
    let { balance, payment, bank, description, category } = debt;
    const listData = [
      { name: "balance", value: escapeSpaces(balance) },
      { name: "payment", value: escapeSpaces(payment) },
      { name: "bank", value: escapeSpaces(bank) },
      { name: "category", value: escapeSpaces(category) }
    ];

    element.insertAdjacentHTML(
      "beforeend",
      `<my-card
          title="${description}"
          list-info = ${JSON.stringify(listData)}
           />`
    );
  });

  !debts.length &&
    element.insertAdjacentHTML("beforeend", `<div>Empty Results</div>`);

  window.scrollTo(0, 0);
};

export { renderUser, renderDebts };
