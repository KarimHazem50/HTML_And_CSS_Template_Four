let a = document.querySelector(".header .header-content .navlist");
let b = document.querySelector(".header .test");
let c =document.querySelector(".header .header-content ul");
let e =document.querySelectorAll(".header-content .navlist span");
let f =document.querySelector(".header-content .navlist .spans");

a.onclick = function () {
    b.classList.toggle("active");
    c.classList.toggle("active");
    e.forEach(element => {
        element.classList.toggle("active");
    });
    f.classList.toggle("active");
}


// background header on scroll
let h = document.querySelector(".header");

// window.onscroll = function () {
//     h.style.cssText = "background-color: rgb(41, 50, 60);"
// }

window.onscroll = function () {
    if (window.scrollY > 250) {
        h.style.cssText = "background-color: rgb(41, 50, 60);"
    }
    else {
        h.style.cssText = "background-color: transparent"
    }
};