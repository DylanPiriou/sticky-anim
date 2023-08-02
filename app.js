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
const section = document.querySelector("section")

gsap.registerPlugin(ScrollTrigger);
gsap.to(square, {
    scrollTrigger: {
        trigger: section,
        scrub: true,
        pin: true,
        end: "bottom 50%"
    },
    width: "100%",
    height: "101%",
    ease: Power4.ease
})

const title = document.querySelector(".title__container")
gsap.to(title, {
    scrollTrigger: {
        trigger: section,
        scrub: true,
        start: "top top",
        end: "bottom 50%"
    },
    y: "-50%"
});

