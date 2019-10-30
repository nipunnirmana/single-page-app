import { MyCard } from "./MyCard.js";
import { renderUser, renderDebts } from "./Renders.js";

let userData = [],
  debtsData = [];

const userCardElm = document.querySelector("#users");
const DebtsCardElm = document.querySelector("#debts");

// Creating a custom HTML Element (my-card)
customElements.define("my-card", MyCard);

// Fetch and populate User Data

fetch("./js/user.js")
  .then(resp => resp.json())
  .then(function(data) {
    userData = data.users;
    renderUser(userCardElm, userData);
  })
  .catch(function(error) {
    console.error("Error Fetching User Data", error);
  });

// Fetch and populate Debts Data

fetch("./js/debts.js")
  .then(resp => resp.json())
  .then(function(data) {
    debtsData = data.debts;
    renderDebts(DebtsCardElm, debtsData);
  })
  .catch(function(error) {
    console.error("Error Fetching Debts Data", error);
  });

// On User Seach Event

document.querySelector("#user-search").addEventListener("input", event => {
  let inputString = event.target.value.toLocaleLowerCase().trim();
  let filteredData = [];
  userCardElm.innerHTML = "";
  // Filter Data based on input query
  filteredData = userData.filter(user =>
    `${user.firstName.toLocaleLowerCase()} ${user.lastName.toLocaleLowerCase()}`
      .toLocaleLowerCase()
      .includes(inputString)
  );
  !inputString.trim().length && filteredData == userData;
  renderUser(userCardElm, filteredData);
});

// On Debts Search Event

document.querySelector("#debts-search").addEventListener("input", event => {
  let inputString = event.target.value.toLocaleLowerCase().trim();
  let filteredData = [];
  DebtsCardElm.innerHTML = "";
  // Filter Data based on input query
  filteredData = debtsData.filter(debt =>
    debt.description.toLocaleLowerCase().includes(inputString)
  );
  !inputString.trim().length && filteredData == debtsData;
  renderDebts(DebtsCardElm, filteredData);
});
