// Getting swiper container
const homeGallery = document.querySelector(".swiper-gallery");
const homeEvidences = document.querySelector(".swiper-evidences");
const blogSlider = document.querySelector(".swiper-blog");

// Initializing swiper slider
const homeGallerySwiper = new Swiper(homeGallery, {
    // Slides you can watch in one go
    // slidesPerView: 3,

    // Margin between slides
    spaceBetween: 10,

    // Slide change speed
    speed: 1000,

    // Autoplay
    autoplay: {
        // Slide change time
        delay: 2500,
    },

    // Loop
    loop: true,

    // Start slide
    // initialSlide: 1,

    // Pagination(bottom navigation)
    pagination: {
        // HTML element
        el: ".swiper-pagination-gallery",
        // Type of pagination
        type: "bullets",
        // Clickable
        clickable: true,
    },

    // Effect
    effect: "coverflow",
    coverflowEffect: {
        // Rotate slides which is not active
        rotate: 10,
        // Slide shadow
        slideShadows: false,
    },

    // Adaptive
    breakpoints: {
        1440: {
            slidesPerView: 3,
            effect: "coverflow",
        },
        992: {
            slidesPerView: 2,
            effect: "",
        },
        768: {
            slidesPerView: 2,
            effect: "",
        },
        0: {
            slidesPerView: 1,
            effect: "",
        },
    },
});

// Initializing swiper slider
const homeEvidencesSwiper = new Swiper(homeEvidences, {
    pagination: {
        // HTML element
        el: ".swiper-pagination-evidences",
        // Type of pagination
        type: "bullets",
        // Clickable
        clickable: true,
    },
    spaceBetween: 20,
    loop: false,
    speed: 600,

    navigation: {
        nextEl: ".swiper-button-next-evidences",
        prevEl: ".swiper-button-prev-evidences",
    },

    // Adaptive
    breakpoints: {
        1440: {
            slidesPerView: 1,
            effect: "coverflow",
        },
        992: {
            slidesPerView: 1,
            effect: "",
        },
        768: {
            slidesPerView: 1,
            effect: "",
        },
        0: {
            slidesPerView: 1,
            effect: "",
        },
    },
});

// Initializing swiper slider
const blogSwiper = new Swiper(blogSlider, {
    slidesPerView: 1,
    spaceBetween: 20,

    pagination: {
        // HTML element
        el: ".swiper-pagination-blog",
        // Type of pagination
        type: "bullets",
        // Clickable
        clickable: true,
    },

    spaceBetween: 20,
    loop: true,
    speed: 600,
});
