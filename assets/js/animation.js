let tl = gsap.timeline();

tl.from(".logo", {
  duration: 1.5,
  yPercent: 70,
  opacity: 0,
  ease: "power1.out",
});
tl.from(
  ".menu-icon",
  {
    duration: 1.5,
    yPercent: 70,
    opacity: 0,
    ease: "power1.out",
  },
  "-=1.1"
);

let tl2 = gsap.timeline();
