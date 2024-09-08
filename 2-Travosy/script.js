const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  console.log(window.scrollY, "상태");
  header.classList.toggle("sticky", window.scrollY > 180);
});
