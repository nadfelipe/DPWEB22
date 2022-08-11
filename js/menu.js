function toogleMenu() {
    let icon = document.querySelector(".menu-icon")
    let menu = document.querySelector(".links_header-sm")

    icon.classList.toggle("fa-bars")
    icon.classList.toggle("fa-xmark")
    menu.classList.toggle("menu-ativo")
}