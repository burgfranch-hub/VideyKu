window.addEventListener("scroll", function() {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.style.height = "65px";
    } else {
        navbar.style.height = "80px";
    }
});
