document.addEventListener("DOMContentLoaded", function() {
    
let isDown = false;
let startX;
let scrollLeft;
const slider = document.querySelector('.parent');



slider.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  })


slider.addEventListener('mouseup', () => {
    isDown = false;
})


slider.addEventListener ('mouseleave', () => {
    isDown  = false;
})

slider.addEventListener('mousemove', (e) => {
    e.preventDefault();
    if(!isDown) return;
    const x = e.pageX - slider.offsetLeft;
    const scroll = x - startX;
    slider.scrollLeft = scrollLeft - scroll;
})
})