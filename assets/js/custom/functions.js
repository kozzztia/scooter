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

        threshold: [0.1, 0.3],
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

    $(el).on('mouseenter', stop);
    $(el).on('mouseleave', start);
}


function initPopupButtons(btn) {
    if (!btn) return;

    if (btn.hasClass('buy-toggler')) {
        btn.on('click', function () {
            $('.buy-popup-wrapper').toggleClass('show-popup');
        });
    }

    if (btn.hasClass('close-buy-popup')) {
        btn.on('click', function () {
            $('.buy-popup-wrapper').removeClass('show-popup');
        });
    }

    if (btn.hasClass('feedback-toggler')) {
        btn.on('click', function () {
            $('.feedback-popup-wrapper').toggleClass('show-popup');
        });
    }

    if (btn.hasClass('close-feedback-popup')) {
        btn.on('click', function () {
            $('.feedback-popup-wrapper').removeClass('show-popup');
        });
    }

    if (btn.hasClass('question-toggler')) {
        btn.on('click', function () {
            $('.question-popup-wrapper').toggleClass('show-popup');
        });
    }

    if (btn.hasClass('close-question-popup')) {
        btn.on('click', function () {
            $('.question-popup-wrapper').removeClass('show-popup');
        });
    }

    if (btn.hasClass('submit-buy-popup')) {
        btn.on('click', function (e) {
            e.preventDefault();
            const $form = btn.closest('.form');
            let valid = true;

            $form.find('[required]').each(function () {
                const $field = $(this);
                $field.removeClass('error');

                if (!$field.val().trim()) {
                    $field.addClass('error');
                    valid = false;
                }
            });

            if (valid) {
                const data = {};
                $form.find('[name]').each(function () {
                    data[$(this).attr('name')] = $(this).val();
                });

                console.log('Form data:', data);

                $('.popupWrapper').removeClass('show-popup');
                $form[0].reset();
            }
        });
    }

    if (btn.hasClass('submit-feedback-popup')) {
        btn.on('click', function (e) {
            e.preventDefault();
            const $form = btn.closest('.form');
            let valid = true;

            $form.find('[required]').each(function () {
                const $field = $(this);
                $field.removeClass('error');

                if (!$field.val().trim()) {
                    $field.addClass('error');
                    valid = false;
                }
            });

            if (valid) {
                const data = {};
                $form.find('[name]').each(function () {
                    data[$(this).attr('name')] = $(this).val();
                });

                console.log('Feedback data:', data);

                $('.feedback-popup-wrapper').removeClass('show-popup');
                $form[0].reset();
            }
        });
    }

    if (btn.hasClass('submit-question-popup')) {
        btn.on('click', function (e) {
            e.preventDefault();
            const $form = btn.closest('.form');
            let valid = true;

            $form.find('[required]').each(function () {
                const $field = $(this);
                $field.removeClass('error');

                if (!$field.val().trim()) {
                    $field.addClass('error');
                    valid = false;
                }
            });

            if (valid) {
                const data = {};
                $form.find('[name]').each(function () {
                    data[$(this).attr('name')] = $(this).val();
                });

                console.log('Question data:', data);

                $('.question-popup-wrapper').removeClass('show-popup');
                $form[0].reset();
            }
        });
    }
}