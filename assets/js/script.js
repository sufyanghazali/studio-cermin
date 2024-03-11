const menuIcon = document.querySelector(".menu-icon");
const nav = document.querySelector(".nav");

menuIcon?.addEventListener("click", () => {
  console.log("clicked");
  if (!nav.classList.contains("is-open")) {
    nav.classList.add("is-open");
  } else {
    nav.classList.remove("is-open");
  }
});

const carousel = document.querySelector(".carousel");

const imageCount = 16;

for (let i = 0; i < imageCount; i++) {
  const carouselItem = document.createElement("div");
  carouselItem.className = "carousel-item";

  const img = document.createElement("img");
  let src = `./assets/images/edited/img${i + 1}.jpg`;
  img.src = src;

  carouselItem.appendChild(img);
  carousel.appendChild(carouselItem);
}

if (window.innerWidth < 768) {
  carousel.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    carousel.scrollLeft += evt.deltaY;
  });
}

function applyCarouselEffect() {
  if (window.innerWidth >= 768) {
    const carouselItems = document.querySelectorAll(".carousel-item");

    const maxWidth = window.innerWidth;
    const maxHeight = window.innerHeight;

    carouselItems.forEach((item) => {
      let x = getRandomIntInclusive(-(maxWidth * 0.1), maxWidth);
      let y = getRandomIntInclusive(-(maxHeight * 0.1), maxHeight);
      let width = getRandomIntInclusive(200, 300);
      item.style.width = `${width}px`;
      item.style.transform = `translate(${x}px, ${y}px)`;
    });

    // document.addEventListener("mousemove", (e) => {
    //   const carousel = document.querySelector(".carousel");

    //   let mouseX = e.pageX;
    //   let mouseY = e.pageY;

    //   let x = mouseX - carousel.offsetWidth / 2;
    //   let y = mouseY - carousel.offsetHeight / 2;

    //   let moveX = carousel.offsetWidth / 2 - mouseX;
    //   let moveY = carousel.offsetHeight / 2 - mouseY;

    //   carousel.style.transform = `translate(${moveX}px, ${moveY}px)`;
    // });

    let x = 0;
    let y = 0;

    let frameX = 0;
    let frameY = 0;

    function mousemove(e) {
      x = e.pageX - carousel.offsetWidth / 2;
      y = e.pageY - carousel.offsetHeight / 2;
    }

    function animate() {
      frameX += (x - frameX) * 0.075;
      frameY += (y - frameY) * 0.075;
      carousel.style.transform = `translate(${-frameX}px, ${-frameY}px`;
    }

    function loop() {
      animate();
      requestAnimationFrame(loop);
    }

    loop();

    window.addEventListener("mousemove", mousemove);
  }
}

// Call the function when the page loads
applyCarouselEffect();

// Call the function when the window is resized
window.addEventListener("resize", applyCarouselEffect);

function getRandomIntInclusive(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
}

function resize() {
  width = window.innerWidth;
  height = window.innerHeight;
}
