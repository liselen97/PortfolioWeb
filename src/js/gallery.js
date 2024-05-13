document.addEventListener("DOMContentLoaded", function() {

const expandImg = document.querySelectorAll(".zoom-in-out");

expandImg.forEach( function (img) {
    img.addEventListener("click", function() {
        img.style.transform = "scale(2)";

        const closeBtn = document.createElement("button");
        closeBtn.innerHTML = "&times;";
        closeBtn.classList.add("close-btn");
        closeBtn.addEventListener("click", function () {
            img.style.transform = "scale(1)";
            closeBtn.remove();
        });

        img.parentNode.appendchild(closeBtn);
    })
})


})