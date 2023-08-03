// SMOOTH SCROLL LENIS
const lenis = new Lenis();

lenis.on("scroll", (e) => {
    // console.log(e);
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

const square = document.querySelector(".square");
const section = document.querySelector(".sticky__section")

gsap.registerPlugin(ScrollTrigger);
gsap.to(square, {
    scrollTrigger: {
        trigger: section,
        scrub: true,
        pin: true,
        start: "top top",
        end: "bottom 50%",
        ease: "linear"
    },
    width: "100%",
    height: "120vh",
    ease: Power4.ease
})

const title = document.querySelector(".title__container")
const sectWrapper = document.querySelector(".section__wrapper")
gsap.to(title, {
    scrollTrigger: {
        trigger: sectWrapper,
        scrub: true,
        start: "top top",
        end: "bottom 60%",
        ease: "linear"
    },
    y: "-50%"
});


// const titles = document.querySelectorAll(".overed");
const cursor = document.querySelector(".cursor")

// titles.forEach(title => {
//     title.addEventListener("mouseover", () => {
//         gsap.to(cursor, {
//             scale: 10,
//             ease: "linear"
//         })
//     })

//     title.addEventListener("mouseleave", () => {
//         gsap.to(cursor, {
//             scale: 1,
//             ease: "linear"
//         })
//     })
// })

const h1 = document.querySelector("h1")
window.addEventListener("scroll", () => {
    const scrollAmount = window.scrollY;
    const newPosition = scrollAmount * .3;
    h1.style.transform = `translateY(${newPosition}px)`;

})

window.addEventListener("mousemove", e => {
    let { pageX, pageY } = e;
    gsap.set(cursor, { x: pageX - cursor.getBoundingClientRect().width / 2, y: pageY - cursor.getBoundingClientRect().width / 2 })
})

const horizontalsection = document.querySelector(".horizontal__section")
const carousselWrapper = document.querySelector(".caroussel__wrapper")
let sections = gsap.utils.toArray(".work");
console.log(sections.length)

let scrollTween = gsap.to(sections, {
    scrollTrigger: {
        trigger: horizontalsection,
        scrub: 1,
        pin: true
    },
    xPercent: -100 * (sections.length - 1),
    ease: "none"
});

const images = document.querySelectorAll(".parallax__img")
images.forEach(img => {
    gsap.to(img, {
        x: "25%",
        scale: 1.1,
        ease: "none",
        scrollTrigger: {
            trigger: img,
            containerAnimation: scrollTween,
            scrub: true
        }
    })
})