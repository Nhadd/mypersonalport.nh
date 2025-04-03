// Smooth scrolling
document.querySelectorAll("nav ul li a").forEach(anchor => {
    anchor.addEventListener("click", function(event) {
        event.preventDefault();
        document.getElementById(this.getAttribute("href").substring(1)).scrollIntoView({ behavior: "smooth" });
    });
});

// Delay pop effect only for sections (except home)
window.addEventListener("scroll", () => {
    document.querySelectorAll("section:not(.hero)").forEach(section => {
        if (section.getBoundingClientRect().top < window.innerHeight - 50) {
            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
        }
    });
});

// Auto-hide header on scroll and show on mouse hover
let lastScrollTop = 0;
const header = document.querySelector("header");
let hideTimeout;

window.addEventListener("scroll", () => {
    let scrollTop = window.scrollY;

    if (scrollTop > lastScrollTop) {
        header.style.top = "-80px"; // Hide header when scrolling down
    } else {
        header.style.top = "0"; // Show header when scrolling up
    }
    lastScrollTop = scrollTop;
});

// Show header when hovering near the top
document.addEventListener("mousemove", (event) => {
    if (event.clientY < 50) {
        header.style.top = "0"; // Show header when cursor is near the top

        // Prevent premature hiding
        clearTimeout(hideTimeout);
    }
});

// Auto-hide when cursor moves away from the top (except in the home section)
document.addEventListener("mousemove", (event) => {
    const homeSection = document.getElementById("home");
    const isInHomeSection = homeSection.getBoundingClientRect().top < window.innerHeight && homeSection.getBoundingClientRect().bottom > 0;

    if (!isInHomeSection && event.clientY > 100) {
        hideTimeout = setTimeout(() => {
            header.style.top = "-80px"; // Hide after delay
        }, 2000);
    }
});

window.onload = () => {
    setTimeout(() => {
        document.querySelector(".left-door").style.transform = "rotateY(-90deg)";
        document.querySelector(".right-door").style.transform = "rotateY(90deg)";
        
        setTimeout(() => {
            document.querySelector(".portfolio-content").style.opacity = "1";
            document.querySelector(".cabinet").style.display = "none"; // Hide doors after animation
        }, 1000);
    }, 1000);
};
