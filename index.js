const mobileMenu = document.querySelector('.mobilenavmenu')
const mobileOpen = document.querySelector('.fa-bars')
const mobileClose = document.querySelector('.fa-times')

mobileOpen.addEventListener('click', function() {
    console.log("open")
    mobileMenu.style.display = "block"
    mobileOpen.style.display = "none"
    mobileClose.style.display = "block"
})

mobileClose.addEventListener('click', function() {
    console.log("open")
    mobileMenu.style.display = "none"
    mobileOpen.style.display = "block"
    mobileClose.style.display = "none"
})