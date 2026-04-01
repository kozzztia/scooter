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

// show tracking
function initAnimation(el) {
    if (!el) return;

    const domEl = el[0];

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-show');
            }else{
                entry.target.classList.remove('is-show');
            }
        });
    }, {

        threshold: [0.1, 0.1],
    });

    observer.observe(domEl);
}

function initTabAutoClicker(el) {
    const radio = el.find("[type='radio']");
    let current = 0;
    let interval;

    function start() {
        interval = setInterval(() => {
            current = (current + 1) % radio.length;
            $(radio[current]).prop('checked', true).trigger('change');
        }, 3000);
    }

    function stop() {
        clearInterval(interval);
    }

    $(radio[current]).prop('checked', true).trigger('change');

    start();

    el.on('mouseenter', stop);
    el.on('mouseleave', start);
}