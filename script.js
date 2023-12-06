
// Set the date and time for the countdown (replace with your desired date)
const countdownDate = new Date("2023-12-31T23:59:59").getTime();

// Update the countdown every second
const countdownInterval = setInterval(function () {
const now = new Date().getTime();
const timeRemaining = countdownDate - now;

if (timeRemaining <= 0) {
    clearInterval(countdownInterval); // Stop the countdown when it reaches zero
    document.getElementById("countdown-clock").innerHTML = "Countdown Expired";
} else {
    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
    (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    // Display the countdown in the specified div
    document.getElementById("countdown-clock").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}
}, 1000); // Update every 1 second