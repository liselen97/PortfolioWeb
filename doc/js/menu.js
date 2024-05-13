document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.getElementById("hamburger-button");
    const closeButton = document.getElementById ("close-button");
    const mobileNav = document.getElementById ("mobile-nav");
    const myJobs = document.getElementById ("my-jobs");
    
    hamburger.addEventListener("click", function() {
        // mobileNav.classList.toggle("show-nav");
        // hamburger.classList.toggle("activo");
        mobileNav.classList.remove("hidden");
    })

    closeButton.addEventListener("click", function() {
        mobileNav.classList.add("hidden");  
    })

    myJobs.addEventListener("click", function() {
        mobileNav.classList.add("hidden");
    })
})