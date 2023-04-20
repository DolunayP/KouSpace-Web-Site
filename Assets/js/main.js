const activeHref = document.location.href;
const href = document.querySelectorAll('.navbar-nav a');

//preloader
const preloader = document.querySelector('#preloader')
window.addEventListener('load', function () {
    if (preloader != null) {
        preloader.style.display = "none"
    }
})

//navbar active option effect
href.forEach(item => {
    if (item.href == activeHref) {
        item.classList.add('active');
    }
});


//sponsors slider
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


//navbar scroll effect
const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
};

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

function togglerBackground() {
    selectNavbar.classList.add('navbar-scrolled')
}

//Page animations
const selectAnimation = document.querySelectorAll('.hidden-right, .hidden-left, .hidden-top, .hidden-bottom, .hidden-z');
const showAnimate = () => {
    const triggerBottom = window.innerHeight / 1.5 * 1.4
    selectAnimation.forEach((items) => {
        const itemsTop = items.getBoundingClientRect().top;
        if (itemsTop < triggerBottom) {
            items.classList.add('show-hidden');
        } else { items.classList.remove('show-hidden') }
    })
}
window.addEventListener('load', showAnimate);
window.addEventListener('scroll', showAnimate);



//Contact page Google Maps api
var map;
function initMap() {

    //map options
    var options = {
        center: { lat: 40.743315, lng: 29.941307 },
        zoom: 14
    }

    // create map
    map = new google.maps.Map(document.getElementById('map'), options)


    //create marker
    var marker = new google.maps.Marker({
        position: { lat: 40.743315, lng: 29.941307 },
        map,
        title: "KouSpace Roket Takımı Çalışma Atölyesi",
    });


}

