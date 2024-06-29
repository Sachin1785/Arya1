document.addEventListener('DOMContentLoaded', (event) => {
    var i = 0;
    var txt = 'DJS Arya'; 
    var speed = 100; 
    function typeWriter() {
        if (i < txt.length) {
            document.getElementById("company").innerHTML += txt.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }
    typeWriter();

    var slideIndex = 0;
var slides = document.getElementsByClassName('slide');

function showSlides() {
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none'; // Hide all slides
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1} // Reset index after last slide
    slides[slideIndex-1].style.display = 'block'; // Show current slide
}

setInterval(showSlides, 3000);

});