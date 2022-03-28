var menu = document.querySelector(".checkbtn")
const navlinks = document.querySelector("ul")

menu.addEventListener("click",() => {
    navlinks.classList.toggle("clouse")
})