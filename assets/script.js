
var update = function () {
    //Add Current time and day to the header 
    document.getElementById("currentDay").innerHTML = moment().format(
        "MMMM Do YYYY, h:mm:ss a"
    );
};
setInterval(update, 1000);


$(document).ready(function () {

    var currentTime = moment().hour();
    console.log("CurrentTime in Array: " + currentTime);

    //9-5 hour count
    const hour = [9, 10, 11, 12, 13, 14, 15, 16, 17];

    //Sets colors for rows
    for (var x = 0; x < hour.length; x++) {
        var divHour = document.getElementById(hour[x]);

        //Set Past text box colour
        if (hour[x] < currentTime) {
            $(divHour).addClass("past");
            console.log("Past Hour");
        }

        //Set future text box colour
        if (hour[x] > currentTime) {
            $(divHour).addClass("future");
            console.log("Future Hour");
        }

        //Set present text box colour
        if (hour[x] === currentTime) {
            $(divHour).addClass("present");
            console.log("Present Hour");
        }

    };
});