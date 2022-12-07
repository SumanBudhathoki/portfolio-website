// Header Scroll
let nav = document.querySelector(".navbar");
let gotopbtn = document.querySelector(".gotopbtn")
window.onscroll = function(){
    if(document.documentElement.scrollTop >20){
        nav.classList.add("header-scrolled");
        gotopbtn.style.visibility = "visible";
    }else{
        nav.classList.remove("header-scrolled");
        gotopbtn.style.visibility = "hidden";
    }
}


// // Hide Navigation in mobile view
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function(a){
    a.addEventListener("click", function(){
        navCollapse.classList.remove("show");
    })
})





