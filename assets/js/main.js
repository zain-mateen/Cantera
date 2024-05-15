/* ======================================
        Side Nav section Starts here
====================================== */

const sidenav = () => {

    const openMenu = document.querySelector(".menu-icon-otr");
    const closeMenu = document.querySelector(".close-icon-otr");
    const overlay = document.querySelector(".overlay")

    openMenu.addEventListener("click", () => {
        overlay.style.left="0px";
    })
    closeMenu.addEventListener("click", () => {
        overlay.style.left="-400px";
    })

}

sidenav();

/* ======================================
        Side Nav section Ends here
====================================== */

/* ======================================
        navDropDown section Starts here
====================================== */

const dropMenu = () =>{
        const menu = document.querySelector('#drop-menu');
        const dropdown = document.querySelector('#drop-otr');
        const dropIcon = document.querySelector('.drop-icon');
    
        menu.addEventListener('click', () => {
            dropdown.classList.toggle('drop-active');
            dropIcon.classList.toggle('drop-icon-active');
        });
    };
    
dropMenu();

/* ======================================
        navDropDown section Ends here
====================================== */

/* ======================================
        Swiper One section Starts here
====================================== */

// var swiper = new Swiper("#swiper-1", {
//         loop: true,
//         pagination: {
//           el: '.swiper-pagination',
//           type: 'bullets',
//           clickable: 'true'
//         },
//         navigation: {
//           nextEl: ".swiper-button-next",
//           prevEl: ".swiper-button-prev",
//         },

// });

/* ======================================
        Swiper One section Ends here
====================================== */

/* ======================================
        Swiper Two section Starts here
====================================== */

var swiper = new Swiper("#swiper-2", {
        spaceBetween: 24,
        loop: true,
        autoplay: true,
        speed: 1000,
        slidesPerView: 5,
        breakpoints: {
                0: {
                slidesPerView: 1
                },
                575: {
                slidesPerView: 2
                },
                768: {
                slidesPerView: 3
                },
                992: {
                slidesPerView: 5
                }
        }
});

/* ======================================
        Swiper Two section Ends here
====================================== */






