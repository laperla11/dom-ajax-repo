//access to the parent element for listing
var pullReqsListEl = document.getElementById("pull-requests-list");

//function for handling access to the pull request from API
function getPullReqs(parentElement, username) {
  parentElement.innerHTML = ""; //empty the display area from previous listing
  fetch("https://api.github.com/repos/codeyourfuture/js-exercises/pulls")
    .then(response => {
      return response.json();
    })
    .then(pullReqs => {
      //filtering requests according to the username
      pullReqs
        .filter(pullReq => {
          return pullReq.user.login === username;
        })
        .forEach(pullReq => {
          //creating link element with name, href and target attributes and assigning them
          var listEl = document.createElement("li");
          listEl.innerHTML = `<a href =${
            pullReq.html_url
          } style = "color : black" target = '_blank'>${pullReq.title}</a>`;
          //appending list element to display area
          parentElement.appendChild(listEl);
        }); //foreach
    }); //then
}

getPullReqs(pullReqsListEl, "laperla11");

//creating new div for search bar and placing before the listing
var searchDivEl = document.createElement("div");
searchDivEl.id = "search";
//creating search input field
searchDivEl.innerHTML = `
</br>
<label>Filter PRs by user : </label>
<input type = "search" id = "searchField" placeholder = "Search for a user... "></input>`;
//appending the search bar
var parentEl = document.querySelector(".my-auto");
parentEl.appendChild(searchDivEl);

//
searchField.addEventListener("keyup", function(event) {
  const value = event.target.value;
  //"value" will be the last value of the input field, and will be updated everytime the user types a new letter
  //creating new div for user pull reqs
  var userPRListEl = document.createElement("div");
  userPRListEl.id = "userPRList";
  parentEl.appendChild(userPRListEl);
  getPullReqs(document.getElementById("userPRList"), value);
});
