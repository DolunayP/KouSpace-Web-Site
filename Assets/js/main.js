
var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 50,
        modifier: 1,
        slideShadows: true,
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
    },
    loop: true,
});

const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
};


// const scrollto = (el) => {
//     let navbar = select('.navbar')
//     let offset = navbar.offsetHeight

//     let elementPos = select(el).offsetTop
//     window.scrollTo({
//         top: elementPos - offset,
//         behavior: 'smooth'
//     })
// }


let selectNavbar = document.querySelector('.navbar');
if (selectNavbar) {
    const navbarScrolled = () => {
        if (window.scrollY > 80) {
            selectNavbar.classList.add('navbar-scrolled');
        } else {
            selectNavbar.classList.remove('navbar-scrolled');
        }
    }
    window.addEventListener('load', navbarScrolled)
    onscroll(document, navbarScrolled)
}



let selectAnimation = document.querySelectorAll('.hidden-right, .hidden-left, .hidden-top, .hidden-bottom, .hidden-z');
const showAnimate = () => {
    const triggerBottom = window.innerHeight / 1.5 * 1.4
    selectAnimation.forEach((items) => {
        const itemsTop = items.getBoundingClientRect().top;
        if (itemsTop < triggerBottom) {
            items.classList.add('show');
        } else { items.classList.remove('show') }
    })
}

window.addEventListener('scroll', showAnimate);