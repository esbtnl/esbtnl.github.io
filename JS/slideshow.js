var slideIndex = 1;
var slides = document.getElementsByClassName("homeSlides");
var dots = document.getElementsByClassName("dot");
showSlide(slideIndex);

function plusSlides(n) {
    showSlide(slideIndex += n);
}
function currentSlide(n){
    showSlide(slideIndex = n)
}
function showSlide(n){
    var i;
    
    if(n > slides.length) {
        slideIndex = 1
    }
    if(n < 1){
        slideIndex = slides.length
    }
    for(i=0; i<slides.length; i++){
        slides[i].style.display = "none";
    }
    for(i=0; i<dots.length; i++){
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex -1].style.display = "block";
    dots[slideIndex-1].className += " active";
    
}

function automaticChange (){
    //setTimeout(plusSlides(1), 2000);
    alert("hellp");
}
setInterval(function(){plusSlides(1);}, 5000);
