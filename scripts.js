// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector("header"); // Select the header element

    // Ensure the header element exists
    if (header) {
        // Add an event listener for scrolling
        window.addEventListener("scroll", function () {
            if (window.scrollY > 50) { // When scrolled down 50px
                header.classList.add("scrolled"); // Add the 'scrolled' class
            } else {
                header.classList.remove("scrolled"); // Remove the 'scrolled' class
            }
        });
    }
});

function toggleVisibility() {
    var videoContent = document.getElementById('video-content');

    // Ensure the video-content element exists
    if (videoContent) {
        if (videoContent.classList.contains('show')) {
            videoContent.classList.remove('show');
        } else {
            videoContent.classList.add('show');
        }
    }
}
