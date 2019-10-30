import { MyCard } from "./MyCard.js";
import { renderUser, renderDebts } from "./Renders.js";

let userData = [],
  debtsData = [];

const userCardElm = document.querySelector("#users");
const DebtsCardElm = document.querySelector("#debts");

customElements.define("my-card", MyCard);

fetch("./js/user.js")
  .then(resp => resp.json())
  .then(function(data) {
    userData = data.users;
    renderUser(userCardElm, userData);
  })
  .catch(function(error) {
    console.error("Error Fetching User Data", error);
  });

fetch("./js/debts.js")
  .then(resp => resp.json())
  .then(function(data) {
    debtsData = data.debts;
    renderDebts(DebtsCardElm, debtsData);
  })
  .catch(function(error) {
    console.error("Error Fetching Debts Data", error);
  });

document.querySelector("#user-search").addEventListener("input", event => {
  let inputString = event.target.value.toLocaleLowerCase();
  let filteredData = [];
  userCardElm.innerHTML = "";
  filteredData = userData.filter(user =>
    `${user.firstName.toLocaleLowerCase()} ${user.lastName.toLocaleLowerCase()}`
      .toLocaleLowerCase()
      .includes(inputString)
  );
  !inputString.trim().length && filteredData == userData;
  renderUser(userCardElm, filteredData);
});

document.querySelector("#debts-search").addEventListener("input", event => {
  let inputString = event.target.value.toLocaleLowerCase();
  let filteredData = [];
  DebtsCardElm.innerHTML = "";
  filteredData = debtsData.filter(debt =>
    debt.description.toLocaleLowerCase().includes(inputString)
  );
  !inputString.trim().length && filteredData == debtsData;
  renderDebts(DebtsCardElm, filteredData);
});
