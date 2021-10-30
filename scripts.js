// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function () {
    let takeOff = document.getElementById("takeoff");
    let flightStatus = document.getElementById("flightStatus");
    let shuttleBackground = document.getElementById("shuttleBackground");
    let shuttleHeight = document.getElementById("spcaceShuttleHeight");
    let up = document.getElementById("up");
    let down = document.getElementById("down");
    let right = document.getElementById("right");
    let left = document.getElementById("left");
    let rocket = document.getElementById("rocket");
    rocket.style.position = "absolute";
    rocket.style.bottom = "0px";
    rocket.style.left = "0px";

    takeOff.addEventListener("click", function () {
        let response = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if (response) {
            flightStatus.innerHTML = "Shuttle in flight.";
            shuttleBackground.style.backgroundColor = "blue";
            spaceShuttleHeight.innerHTML = Number(spaceShuttleHeight.innerHTML) + 10000;
            }
        });

    landing.addEventListener("click", function () {
        window.alert("The shuttle is landing. Landing gear engaged.");
        flightStatus.innerHTML = "The shuttle has landed.";
        shuttleBackground.style.backgroundColor = "green";
        spaceShuttleHeight.innerHTML = 0;
    });

    missionAbort.addEventListener("click", function () {
        let abortResponse = window.confirm("Confirm that you want to abort the mission.");
        if (abortResponse) {
            flightStatus.innerHTML = "Mission aborted.";
            shuttleBackground.style.backgroundColor = "red";
            spaceShuttleHeight.innerHTML = 0;
        };
    });

    up.addEventListener("click", function () {
        spaceShuttleHeight.innerHTML = Number(spaceShuttleHeight.innerHTML) + 10000;
        rocket.style.bottom = `${parseInt(rocket.style.bottom) + 10}px`
    });

    down.addEventListener("click", function () {
        spaceShuttleHeight.innerHTML = Number(spaceShuttleHeight.innerHTML) - 10000;
        rocket.style.bottom = `${parseInt(rocket.style.bottom) - 10}px`
    });

    right.addEventListener("click", function () {
        rocket.style.left = `${parseInt(rocket.style.left) + 10}px`
    });

    left.addEventListener("click", function () {
        rocket.style.left = `${parseInt(rocket.style.left) - 10}px`
    });
    
    });
