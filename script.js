setInterval(showTime, 1000);
function showTime() {
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();

    if (hour > 12) {
        hour -= 12;
    }
    if (hour == 0) {
        hour = 12;
    }

    hour = hour < 10 ? "" + hour : hour;
    min = min < 10 ? "0" + min : min;
    document.getElementById("hours").innerHTML = hour;
    document.getElementById("minutes").innerHTML = min;
    am_pm = "AM";

    if (hour > 12) {
        hour -= 12;
        am_pm = "PM";
    }
    if (hour == 0) {
        hr = 12;
        am_pm = "AM";
    }

    document.getElementById("ampm").innerHTML = am_pm;
}