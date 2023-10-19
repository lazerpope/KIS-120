let menu = document.querySelector('.menu')
let menuButton = menu.querySelector('span')
let ulElement = menu.querySelector('ul')
let isMenuOpened = false

function openMenu() {
    if (isMenuOpened) {
        isMenuOpened = false
        menuButton.innerHTML = 'menu'
        ulElement.style.display = 'none'
        return
    }
    isMenuOpened = true
    menuButton.innerHTML = 'menu_open'
    ulElement.style.display = 'block'
    document.addEventListener('click', closeMenuOnClickOutside);
}

// Function to close the menu when clicking outside
function closeMenuOnClickOutside(event) {
    console.log(event);
    if (!menu.contains(event.target)) {
        isMenuOpened = false
        menuButton.innerHTML = 'menu'
        ulElement.style.display = 'none'
        document.removeEventListener('click', closeMenuOnClickOutside);
    }
}


menuButton.addEventListener('click', openMenu);





