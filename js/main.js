import { MyCard } from "./MyCard.js";
import { renderUser } from "./Renders.js";

fetch("./js/user.js")
  .then(resp => resp.json())
  .then(function(data) {
    data.users.forEach(user => {
      renderUser("#users", user);
    });
  })
  .catch(function(error) {
    console.error("Error Fetching User Data", error);
  });

customElements.define("my-card", MyCard);
