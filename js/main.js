const header = document.getElementById("header");
const drawer = document.getElementById("drawer");
const menuOpen = document.getElementById("menu-open");
const menuClose = document.getElementById("menu-close");
const toast = document.getElementById("news-toast");
const toastClose = document.getElementById("toast-close");

const onScroll = () => {
  header.classList.toggle("is-solid", window.scrollY > 80);
};

window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

const openMenu = () => {
  drawer.hidden = false;
  drawer.classList.add("is-open");
  document.body.style.overflow = "hidden";
};

const closeMenu = () => {
  drawer.classList.remove("is-open");
  drawer.hidden = true;
  document.body.style.overflow = "";
};

menuOpen.addEventListener("click", openMenu);
menuClose.addEventListener("click", closeMenu);
drawer.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeMenu);
});

toastClose.addEventListener("click", () => {
  toast.classList.add("is-hidden");
});

document.querySelectorAll("[data-slider]").forEach((slider) => {
  const slides = [...slider.querySelectorAll("img")];
  let index = 0;

  const show = (next) => {
    slides[index].hidden = true;
    index = (next + slides.length) % slides.length;
    slides[index].hidden = false;
  };

  slider.querySelector(".prev").addEventListener("click", () => show(index - 1));
  slider.querySelector(".next").addEventListener("click", () => show(index + 1));
});
