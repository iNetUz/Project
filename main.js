const nav = document.querySelector("nav");
const mobileNav = document.querySelector("nav.mobile-nav");
const menuIcon = document.querySelector(".menu-icon");
const closeIcon = document.querySelector(".mobile-menu-container .close-icon");
const mobileMenuContainer = document.querySelector(".mobile-menu-container");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 60) {
    nav.classList.add("scrolled");
    mobileNav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
    mobileNav.classList.remove("scrolled");
  }
});

menuIcon.addEventListener("click", () => {
  mobileMenuContainer.classList.add("active");
});

closeIcon.addEventListener("click", () => {
  mobileMenuContainer.classList.remove("active");
});




let btn = document.querySelectorAll(".btn").forEach((btn) => {
  btn.addEventListener("mousemove", (e) => {
    let x = e.offsetX;
    let y = e.offsetY;
    let btnWidth = btn.clientWidth;
    let btnHeight = btn.clientHeight;
    let transX = x - btnWidth / 2;
    let transY = y - btnHeight / 2;
    btn.style.transform = `translateX(${transX}px) translateY(${transY}px)`;

    let mx = e.pageX - btn.offsetLeft;
    let my = e.pageY - btn.offsetTop;
    btn.style.setProperty("--x", mx + "px");
    btn.style.setProperty("--y", my + "px");
  });
  btn.addEventListener("mouseout", (e) => {
    btn.style.transform = "";
  });
});


Resources1× 0.5× 0.25×Rerun
