const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo')


const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
}

menu.addEventListener('click', mobileMenu);

// Show active menu when scrolling

const highlightMenu = () => {
    const elem = document.querySelector('.highlight')
    const menu_home = document.querySelector('#home-page')
    const menu_about = document.querySelector('#about-page')
    const menu_services = document.querySelector('#services-page')
    let scrollPos = window.scrollY
    
    // add highlight class to my menu items

    if(window.innerWidth > 960 && scrollPos < 600){
        menu_home.classList.add('highlight')
        menu_about.classList.remove('highlight')
        return
    } else if (window.innerWidth > 960 && scrollPos < 1400){
        menu_about.classList.add('highlight')
        menu_home.classList.remove('highlight')
        menu_services.classList.remove('highlight')
        return
    } else if (window.innerWidth > 960 && scrollPos < 2345){
        menu_services.classList.add('highlight')
        menu_about.classList.remove('highlight')
        return
    }

    if(elem && window.innerWidth <960 && scrollPos <600 || elem) {
        elem.classList.remove('highlight')
    }

}

window.addEventListener('scroll', highlightMenu)
window.addEventListener('click', highlightMenu)

//close mobile menu on click

const hidemobilemenu = () => {
    const menuBars = document.querySelector('.is-active')
    if(window.innerWidth <= 768 && menuBars) {
        menu.classList.toggle('is-active')
        menuLinks.classList.remove('active')
    }
}

menuLinks.addEventListener('click', hidemobilemenu)
navLogo.addEventListener('click', hidemobilemenu)