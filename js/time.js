/*
* Updates the clock every second
*/
window.onload = function updateClock() {
    // Current date
    var now = new Date();
    // Months array
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    // Formatted Time
    var time = hoursTo12(now) + ':' + addLeadingZero(now.getMinutes()) + ':' + addLeadingZero(now.getSeconds());
    // Formatted Date
    var date = months[now.getMonth()] + ' ' + now.getDate() + ', ' + now.getFullYear();

    // Set the content of the element to the formatted string
    document.getElementById('date').innerHTML = date;
    document.getElementById('time').innerHTML = time;

    // Call this function again in 1 second.
    setTimeout(updateClock, 1000);
}

// Initial call
updateClock();

/*
* Converts from military time to civilian time
*/
function hoursTo12(date) {
    return (date.getHours() + 24) % 12 || 12;
}

/*
* Adds a leading zero to minutes and seconds that is less than 10
*/
function addLeadingZero(time) {
    return (time < 10) ? '0'+time : time;
}
