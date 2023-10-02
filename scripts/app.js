const navBtn = document.querySelector(".navbtn")
const navMenu = document.querySelector(".mobilnavmenu")
let navOpen = false;

navBtn.addEventListener("click", function() {
    if (navOpen) {
        navBtn.classList.remove("navbtnopen")
        navMenu.classList.remove("mobilnavmenuopen")
        navOpen = false
    } else {
        navBtn.classList.add("navbtnopen")
        navMenu.classList.add("mobilnavmenuopen")
        navOpen = true
    }
})