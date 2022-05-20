let color = document.querySelector("#color");

color.addEventListener("click", colorCom);

function colorCom() {
  alert("Blue or red! Can't choose between them lol.");
}

let place = document.querySelector("#place");

place.addEventListener("click", placeCom);

function placeCom() {
  alert("New Zealand is nice I guess.");
}

let ritual = document.querySelector("#ritual");

ritual.addEventListener("click", ritualCom);

function ritualCom() {
  alert("Playing Video games, writing music or working out at the gym. So Many!");
}