// Write code here to communicate with Github

//accessing the parent element for the list of API
var apiResultEl = document.getElementById("api-result");
//creating header, button and display area elements as children to api=result display field
apiResultEl.innerHTML = `
<h3>Space Missions</h3>
<button id ='missionBtn'>New Mission</button>
<p id='display'></p>
`;
//targeting 'new mission' button and adding 'click' event
//document.getElementById("missionBtn").onclick = function() {
missionBtn.onclick = function() {
  display.innerHTML = ""; // empty the display area from previous display
  fetch("https://api.spacexdata.com/v3/launches")
    .then(response => {
      return response.json();
    })
    .then(missions => {
      var index = Math.round(Math.random() * missions.length); //selecting random index
      //inserting the information from API to the display area
      display.innerHTML = `
      Mission Name : ${missions[index].mission_name} </br> Launch year : ${
        missions[index].launch_year
      } </br> Rocket name : ${
        missions[index].rocket.rocket_name
      } </br> Details : ${missions[index].details}`;
      //appending the display area to parent element/
      apiResultEl.appendChild(display);
    });
}; //onclick event
