// Write code here to communicate with Github

//accessing the parent element for the list of repesitories
var reposListEl = document.getElementById("repos-list");

//function to list the repositories fot users
function getUserRepoList(user = "laperla11") {
  //fetching the repositories from github API
  fetch("https://api.github.com/users/" + user + "/repos")
    .then(response => {
      return response.json();
    })
    .then(repos => {
      //looping through each repo
      repos.forEach(repo => {
        //creating link element with name, href and target attributes
        var listEl = document.createElement("li");
        listEl.innerHTML = `<a href =${repo.html_url} target = '_blank'>${
          repo.name
        }</a>`;
        //appending list element to repository list
        reposListEl.appendChild(listEl);
      });
      //calculating repository number
      document.getElementById("repos-count").innerText = repos.length;
    });
}
//creating new div for search bar and placing before the listing
var searchDivEl = document.createElement("div");
searchDivEl.id = "search";
var parentEl = document.querySelector(".my-auto");
var refEl = document.querySelectorAll(".mb-5");
parentEl.insertBefore(searchDivEl, refEl[1].nextSibling);

//creating search input field
searchDivEl.innerHTML = `
<label>Search for a GitHub user : </label>
<input type = "search" id = "searchField" placeholder = "Enter username... "></input>
<button id = "searchButton">Search</button>`;

//listing default user repositories
getUserRepoList();

//listing other user repositories with the "click" event
document
  .getElementById("searchButton")
  .addEventListener("click", onclickSearchBtn);

function onclickSearchBtn() {
  reposListEl.innerHTML = "";
  getUserRepoList(searchField.value);
}
