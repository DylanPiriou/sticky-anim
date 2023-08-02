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
        start: "top top",
        end: "bottom 50%",
        ease: "linear"
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
        start: "top 5%",
        end: "bottom 70%"
    },
    y: "-50%",
    ease: "linear"
});

const h1 = document.querySelector("h1");
const cursor = document.querySelector(".cursor")

h1.addEventListener("mouseover", () => {
    gsap.to(cursor, {
        width: 400,
        height: 400,
        ease: Power2.ease
    })
})

h1.addEventListener("mouseleave", () => {
    gsap.to(cursor, {
        width: 40,
        height: 40
    })
})

window.addEventListener("scroll", () => {
    const scrollAmount = window.scrollY;
    const newPosition = scrollAmount * .3;
    h1.style.transform = `translateY(${newPosition}px)`;

})

window.addEventListener("mousemove", e => {
    let { pageX, pageY } = e;
    gsap.set(cursor,{x :pageX - cursor.getBoundingClientRect().width / 2 ,y :pageY - cursor.getBoundingClientRect().width / 2})
})
