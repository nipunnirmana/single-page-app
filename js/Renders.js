import { escapeSpaces } from "./Helpers.js";

const renderUser = (element, users) => {
  // Render Passed user data as a list
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

  // Empty Results

  !users.length &&
    element.insertAdjacentHTML("beforeend", `<div>Empty Results</div>`);

  // Scrolling back to top to avoid any sticky overlaps

  window.innerWidth >= 1024 && window.scrollTo(0, 0);
};

const renderDebts = (element, debts) => {
  // Render Passed debts data as a list
  debts.forEach(debt => {
    let { balance, payment, bank, description, category, escalate } = debt;
    const listData = [
      { name: "balance", value: escapeSpaces(balance) },
      { name: "payment", value: escapeSpaces(payment) },
      { name: "bank", value: escapeSpaces(bank) },
      { name: "category", value: escapeSpaces(category) }
    ];

    element.insertAdjacentHTML(
      "beforeend",
      `<my-card
          ${!!escalate ? `escalate= '${JSON.stringify(escalate)}' ` : ``}
          title="${description}"
          list-info = ${JSON.stringify(listData)}
           />`
    );
  });

  // Empty Results

  !debts.length &&
    element.insertAdjacentHTML("beforeend", `<div>Empty Results</div>`);

  // Scrolling back to top to avoid any sticky overlaps

  window.innerWidth >= 1024 && window.scrollTo(0, 0);
};

export { renderUser, renderDebts };
