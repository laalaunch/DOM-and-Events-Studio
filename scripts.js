// Write your JavaScript code here.
// Remember to pay attention to page loading!
function takeOff() {
    let shouldRun = window.confirm("Do you want to go through with this?")
    if (shouldRun) {
        document.getElementById("takeoff").innerHTML;
        document.getElementById("flightStatus").innerHTML = "Shuttle in Flight";
        document.getElementById("shuttleBackground").style.backgroundColor = "blue";
        document.getElementById("spaceShuttleHeight").innerHTML = 10000;
    }
}

function landing() {
    window.alert("The shuttle is landing. Landing gear engaged.");
    document.getElementById("flightStatus").innerHTML = "The shuttle has landed.";
    document.getElementById("shuttleBackground").style.backgroundColor = "green";
    document.getElementById("spaceShuttleHeight").innerHTML = 0;
}

function missionAbort() {
    let shouldAbort = window.confirm("Confirm that you want to abort the mission.")
    if (shouldAbort) {
        document.getElementById("missionAbort").innerHTML;
        document.getElementById("flightStatus").innerHTML = "Mission Aborted";
        document.getElementById("shuttleBackground").style.backgroundColor = "green";
        document.getElementById("spaceShuttleHeight").innerHTML = 0;
    }
}


// function moveRocket(str) {
//     let xPos = 0;
//     document.getElementById("rocket").style.position = "relative";
//     switch(str) {
//         case "down":
//             xPos += 10;
//             document.getElementById('rocket').style.top = xPos + "px";
//             document.getElementById("spaceShuttleHeight").innerHTML = 0;
//             break;

//         case "up":
//             xPos -= 10;
//             document.getElementById('rocket').style.top = xPos + "px";
//             document.getElementById("spaceShuttleHeight").innerHTML = 10000;
//             break;

//         case "left" :
//             xPos -= 10;
//             document.getElementById("rocket").style.left = xPos + "px";
//             break;

//         case "right" :
//             xPos += 10;
//             document.getElementById("rocket").style.left = xPos + "px";
//             break;
//     }
// }

let xPos = 0;
let addHeight = 0;
let decreaseHeight = 0;

function moveRocket() {
    let rocket = document.getElementById("rocket");
    document.getElementById("rocket").style.position = "relative";
    addHeight += 10000;
    decreaseHeight -= 10000;

    upBtn.addEventListener('click', function(e) {
        xPos -= 10;
        rocket.style.top = xPos + "px";
        document.getElementById("spaceShuttleHeight").innerHTML = addHeight;
    });

    downBtn.addEventListener('click', function(e) {
        xPos += 10;
        rocket.style.top = xPos + "px";
        document.getElementById("spaceShuttleHeight").innerHTML = decreaseHeight;
    });

    rightBtn.addEventListener('click', function(e) {
        xPos += 10;
        rocket.style.left = xPos + "px";
    });

    leftBtn.addEventListener('click', function(e) {
        xPos -= 10;
        rocket.style.left = xPos + "px";
    });
}