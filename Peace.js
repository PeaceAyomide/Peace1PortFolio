/*    Scrolling Section     */

let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
            });
        };
    });

/*    Rrmoving Harmburger Menu When Click Navbar Link (scroll)     */

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
    
};

/*    End Scrolling Section     */




/*    Functioning HarmBurger Menu      */

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/*    End Functioning HarmBurger Menu     */



/* Reveal Scroll */
ScrollReveal({
   // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading',  { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form',  { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1',  { origin: 'left' });
ScrollReveal().reveal('.home-content p',  { origin: 'right' });

/* End Reveal Scroll */





/* Typing Magic */
const typed = new Typed('.multiple-text', {
    strings: ['Frontend Dev', 'Designer', 'Freelancer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
   loop: true
});


/* End Typing Magic */
