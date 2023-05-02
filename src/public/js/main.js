const menuItems = document.querySelectorAll('.topnav a');

menuItems.forEach((menuItem) => {
    menuItem.onclick = () => {
        menuItems.forEach((menuItem) => {
            menuItem.classList.remove('active')
        })
        menuItem.classList.add('active')
    }
}
)