document.addEventListener("DOMContentLoaded", function () {
  const menu = document.querySelector("#navbar ul");
  const hamburger = document.querySelector(".hamburger");

  hamburger.addEventListener("click", function () {
    menu.classList.toggle("active");
  });
});

// GSAP animations for initial text and images
gsap.from(".text h4", {
  y: 5,
  duration: 1,
  delay: 0.3,
  opacity: 0,
  stagger: 0.5
});

gsap.from(".img img", {
  duration: 1,
  delay: 0.3,
  opacity: 0,
  stagger: 0.5
});

// Pop-out & Follow Cursor Effect
const images = document.querySelectorAll(".img img");
const text = document.querySelector(".text");

images.forEach((img) => {
  img.addEventListener("mouseenter", () => {
    // Pop-out effect
    gsap.to(img, {
      scale: 1.2, // Slightly larger on hover
      zIndex: 10,
      opacity: 1,
      duration: 0.4,
      ease: "power2.out"
    });

    // Dim other images & text
    gsap.to(images, {
      opacity: 0.4,
      duration: 0.4,
      ease: "power2.out",
      overwrite: "auto"
    });

    gsap.to(text, {
      opacity: 0.3,
      duration: 0.4,
      ease: "power2.out"
    });

    // Keep hovered image fully visible
    gsap.to(img, {
      opacity: 1,
      duration: 0.4,
      ease: "power2.out"
    });
  });

  img.addEventListener("mousemove", (e) => {
    // Move the image with the cursor
    const { left, top, width, height } = img.getBoundingClientRect();
    const xPos = e.clientX - (left + width / 2);
    const yPos = e.clientY - (top + height / 2);

    gsap.to(img, {
      x: xPos * 0.9, // Move slightly in the x direction
      y: yPos * 0.9, // Move slightly in the y direction
      duration: 1,
      ease: "power2.out"
    });
  });

  img.addEventListener("mouseleave", () => {
    // Reset all animations
    gsap.to(images, {
      scale: 1,
      x: 0,
      y: 0,
      opacity: 1,
      duration: 0.4,
      ease: "power2.out",
      overwrite: "auto"
    });

    gsap.to(text, {
      opacity: 1,
      duration: 0.4,
      ease: "power2.out"
    });
  });
});
