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