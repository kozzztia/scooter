/**
 * fix onload animation bug
 */
const fixChromeLoadingPageAnimationIssue = function () {
    document.body.classList.remove("preload");
};
window.addEventListener("DOMContentLoaded", fixChromeLoadingPageAnimationIssue);

/**
 * navigation toggle
 */
function navigationToggle(el) {
    const button = el.find(".menu-toggler");

    if (!button.length) return;

    button.on("click", function () {
        $("body").toggleClass("show-nav");
    });

    window.addEventListener("resize", function () {
        $('body').removeClass("show-nav");
    });
}


function initSlider(el) {
    if (!el) return;
    new Swiper(el, {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: true,
            dynamicMainBullets: 3,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            768: {
                slidesPerView: 1.7,
            },
            1024: {
                slidesPerView: 2.5,
            },
        },
    });
}