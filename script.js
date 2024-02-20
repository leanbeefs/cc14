
function toggleNavbar() {
    var navbar = document.querySelector('.navbar');
    var burgir = document.querySelector('.burgir');
    navbar.classList.toggle('hide');
    burgir.style.display = 'none'; // Hide the burger icon
}
function hideNavbar() {
    var navbar = document.querySelector('.navbar');
    navbar.classList.add('hide');
    var burgir = document.querySelector('.burgir');
    burgir.style.display = 'block'; // Show the burger icon
}

window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    var burgir = document.querySelector('.burgir');
    if (window.pageYOffset > 0) {
        navbar.classList.add('hide'); // Hide the navbar
        if (!isMouseNearNavbar()) {
            burgir.style.display = 'block'; // Show the burger icon
        }
    } else {
        navbar.classList.remove('hide'); // Show the navbar
        burgir.style.display = 'none'; // Hide the burger icon
    }
});

document.addEventListener('mousemove', function(event) {
    var burgir = document.querySelector('.burgir');
    if (!isMouseNearNavbar() && window.pageYOffset > 0) {
        burgir.style.display = 'block'; // Show the burger icon
    }
});

function isMouseNearNavbar() {
    var navbar = document.querySelector('.navbar');
    return (event.clientY < navbar.offsetHeight + 20);
}
function smoothScroll(event, duration) {
    event.preventDefault(); // Prevent default anchor behavior
    const targetId = event.target.getAttribute('href'); // Get target section id
    const targetSection = document.querySelector(targetId); // Find target section
    const targetPosition = targetSection.offsetTop; // Get target section's top position
    const startPosition = window.pageYOffset; // Get current scroll position
    const distance = targetPosition - startPosition; // Calculate distance to scroll
    let startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime; // Set start time if null
        const timeElapsed = currentTime - startTime; // Calculate time elapsed
        const scrollAmount = Math.easeInOutQuad(timeElapsed, startPosition, distance, duration); // Calculate scroll amount
        window.scrollTo(0, scrollAmount); // Scroll to the position
        if (timeElapsed < duration) requestAnimationFrame(animation); // Continue animation until duration is reached
    }

    // Easing function for smooth scrolling
    Math.easeInOutQuad = function (t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    };

    requestAnimationFrame(animation); // Start animation
}


function smoothScrollToTop(duration) {
    const startPosition = window.pageYOffset;
    const distance = -startPosition;
    let startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const scrollAmount = Math.easeInOutQuad(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, scrollAmount);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    Math.easeInOutQuad = function (t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    };

    requestAnimationFrame(animation);
}
function copyEmail(event){
    event.preventDefault();
    const emailAddress = "lark.orillos@gmail.com";
    navigator.clipboard.writeText(emailAddress);
    alert("Email Copied! " + emailAddress);
}
