// Function to move the element randomly
function moveRandomEl(elm) {
    elm.style.position = "absolute";  // Make sure the element's position is absolute
    // Random position between 5% and 90% on top and left axes
    elm.style.top = Math.floor(Math.random() * 90 + 5) + "%";
    elm.style.left = Math.floor(Math.random() * 90 + 5) + "%";
}

// Select the element
const moveRandom = document.querySelector("#move-random");

// Event listener to move the element when mouse enters
moveRandom.addEventListener("mouseenter", function(e) {
    moveRandomEl(e.target);
});