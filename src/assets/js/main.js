$(document).ready(function () {
    setTimeout(function () {
        $(".loading-screen").fadeOut();
    }, 1000);

    function debounce(func, wait = 20, immediate = true) {
        var timeout;
        return function () {
            var context = this,
                args = arguments;
            var later = function () {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    }

    function checkText() {
        if (window.scrollY > 20) {
            navToggle.classList.add("scroll");
        } else {
            navToggle.classList.remove("scroll");
        }

        parallaxText.forEach((text, index) => {
            // half way through the image
            const slideInAt = (window.scrollY + window.innerHeight) - text.offsetHeight / 2;
            // bottom of the image
            const textBottom = text.offsetTop + text.offsetHeight;
            const isHalfShown = slideInAt > text.offsetTop;
            const isNotScrolledPast = window.scrollY < textBottom;

            let st = window.pageYOffset || document.documentElement.scrollTop;

            if (st > lastScrollTop[index]) {
                if (isHalfShown && isNotScrolledPast) {
                    currentPosition[index] += 10;
                    text.style.transform = `translateX(${currentPosition[index]}px)`;
                    console.log("Scroll Kebawah");
                    console.log(text);
                }
            } else {
                if (isHalfShown && isNotScrolledPast) {
                    currentPosition[index] -= 10;
                    text.style.transform = `translateX(${currentPosition[index]}px)`;
                    console.log("Scroll Keatas");
                    console.log(text);
                }
            }
            lastScrollTop[index] = st <= 0 ? 0 : st; // For Mobile or negative scrolling
        });
    }

    const t1 = new TimelineMax({
        paused: true
    });

    t1.to(".nav", 1.8, {
        width: "100%",
        ease: Expo.easeInOut,
    });

    t1.staggerTo(".nav-item a", 0.6, {
        top: "0px",
        ease: Expo.easeInOut
    }, 0.1, "-=0.8");

    t1.reverse();

    $(document).on("click", ".nav-toggle", function () {
        t1.reversed(!t1.reversed());
    });

    $(document).on("click", ".nav-item a", function () {
        t1.reversed(!t1.reversed());
    });

    const navToggle = document.querySelector('.nav-toggle');
    const parallaxText = document.querySelectorAll('.parallax');
    let lastScrollTop = [0, 0];
    let currentPosition = [0, 0];
    window.addEventListener('scroll', debounce(checkText));

    const rectanglePath = "M0,0H28V28H0Z";
    const polygonPath = "M0,0H28L14.959,28h-.376Z";
    const scrollButton = document.querySelector(".scroll-button");

    scrollButton.addEventListener("mouseenter", () => {
        const timeline = anime.timeline({
            duration: 500,
            easing: "easeOutExpo"
        });
        timeline.add({
            targets: ".rectangle",
            d: [{
                value: polygonPath
            }]
        }).add({
            targets: scrollButton,
            opacity: 1,
            scale: 1.25,
        });
    });

    scrollButton.addEventListener("mouseleave", () => {
        const timeline = anime.timeline({
            duration: 500,
            easing: "easeOutExpo"
        });
        timeline.add({
            targets: ".rectangle",
            d: [{
                value: rectanglePath
            }]
        }).add({
            targets: scrollButton,
            opacity: .75,
            scale: 1
        });
    });
});