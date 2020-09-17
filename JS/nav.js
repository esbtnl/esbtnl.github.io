
//Slide out the menu
const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li")

    burger.addEventListener('click',()=>{
        //Open the nav on mobile
        nav.classList.toggle('nav-active')
        //Animate the links of the nav
        navLinks.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation = ``;
            }else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index/7 + 0.2}s`;
    
            }
        });
        //Burger Animation
        burger.classList.toggle('toggle');

    });
    
}

navSlide();

var lastScrollTop = 0;

window.addEventListener("scroll", function(){ 
   var st = window.pageYOffset || document.documentElement.scrollTop; 
   
    if (st > lastScrollTop){
        unStick()
    } 
    else {
        stick()
    }
   lastScrollTop = st <= 0 ? 0 : st; 
   // For Mobile or negative scrolling
}, false);

//Stick the Navbar
/*
window.onscroll = function() {stick()};
*/
var navBar = document.getElementById("nav");
var sticky = navBar.offsetTop;

function stick() {
    if(window.pageYOffset > sticky){
        navBar.classList.add("sticky")
    }else{
        navBar.classList.remove("sticky")
    }
}
function unStick(){
    if(window.pageYOffset > sticky){
        navBar.classList.remove("sticky")

    }else{
        navBar.classList.add("sticky")

    }
}
