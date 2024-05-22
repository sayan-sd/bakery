/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

// MENU SHOW
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

// MENU HIDDEN
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}


/*=============== HEADER CAROUSEL ===============*/
let nextButton = document.getElementById('next');
let prevButton = document.getElementById('prev');
let carousel = document.querySelector('.carousel');
let listHTML = document.querySelector('.carousel .list');
nextButton.onclick = function(){
    showSlider('next');
}
prevButton.onclick = function(){
    showSlider('prev');
}

let unAcceppClick;
const showSlider = (type) => {
    nextButton.style.pointerEvents = 'none';
    prevButton.style.pointerEvents = 'none';

    carousel.classList.remove('next', 'prev');
    let items = document.querySelectorAll('.carousel .list .item');
    if(type === 'next'){
        listHTML.appendChild(items[0]);
        carousel.classList.add('next');
    }else{
        listHTML.prepend(items[items.length - 1]);
        carousel.classList.add('prev');
    }
    clearTimeout(unAcceppClick);
    unAcceppClick = setTimeout(()=>{
        nextButton.style.pointerEvents = 'auto';
        prevButton.style.pointerEvents = 'auto';
    }, 2000)

    lastChangeTime = Date.now(); 
}

// automatically show the next slider every 5 seconds
window.onload = () => {
    setTimeout(() => {
        showSlider('next');
        lastChangeTime = Date.now();
    }, 6000); 
}
setInterval(() => {
    let now = Date.now();
    if (now - lastChangeTime >= 5000) { // Only change if 5 seconds have passed since the last change
        showSlider('next');
    }
}, 1000);



/*=============== VALUE ACCORDION ===============*/
const accordionItems = document.querySelectorAll('.value-accordion-item');

accordionItems.forEach((item) => {
    const accordionHeader = item.querySelector('.value-accordion-header');

    accordionHeader.addEventListener('click', () => {
        const openItem = document.querySelector('.accordion-open');

        toggleItem(item);

        if (openItem && openItem !== item) {
            toggleItem(openItem);
        }
    });
})

const toggleItem = (item) => {
    const accordionContent = item.querySelector('.value-accordion-content');

    if (item.classList.contains('accordion-open')) {
        accordionContent.removeAttribute('style');
        item.classList.remove('accordion-open');
    }
    else {
        accordionContent.style.height = accordionContent.scrollHeight + 'px';
        item.classList.add('accordion-open');
    }
}

// =================== FOOTER YEAR ====================
const currentYear = new Date().getFullYear();
const year = document.getElementById('current-year');
year.innerText = currentYear;



/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('bg-header') : header.classList.remove('bg-header');
}
window.addEventListener('scroll', scrollHeader);


/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up');
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll') : scrollUp.classList.remove('show-scroll');
}

window.addEventListener('scroll', scrollUp);


/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'ri-sun-line';

// previously selected theme by user 
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme)? 'ri-moon-line' : 'ri-sun-line';

if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
    themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme);
}

themeButton.addEventListener('click', () => {
    //add or remove theme
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);

    //save the current theme
    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
})


// ================ ORDER NOW BUTTON TO WHATSAPP ================
document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll('#orderNowButton');
    const whatsappLink = "https://wa.me/917038647356?text=Cake%20Order%20Form%20for%20Whiskd%20n%20Bakd%0A(Please%20fill%20all%20the%20details%20carefully.%20We%20use%20this%20form%20only%20while%20making%20the%20cake,%20so%20any%20points%20discussed%20outside%20of%20this%20form,%20can%20be%20missed).%0A%0AYour%20name%20(required):%0ADate%20when%20needed:%0ATime%20when%20needed:%0A%0AQuantity%20(kgs):%0AFlavour:%0A%0ACake%20details%20(mention%20your%20customisations/changes%20to%20color/design%20of%20the%20cake):%0A%0AMessage%20OR%20Name/age%20on%20cake%20(strictly%20not%20more%20than%204-5%20words)%0A%0AContact%20no:%0AAlternate%20no:%0A%0AAddress%20for%20delivery%20(Please%20leave%20blank%20if%20it’s%20a%20pickup):%0A%0ABy%20ordering%20with%20us,%20you%20agree%20to%20the%20above%20T%26C.%20Thanks.";
    
    buttons.forEach(button => {
        button.href = whatsappLink;
    });
});



/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true, //reapeat
})

sr.reveal(`.footer-logo, .footer-description, .footer-content, .footer-info, .testimonials-container`)
sr.reveal(`.about-data, .recently-data, .value-content`, { origin: 'left' })
sr.reveal(`.about-img, .recently-img, .value-image`, {origin: 'right' })
sr.reveal(`.popular-card, .feature`, {interval: 100 })
