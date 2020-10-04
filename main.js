window.addEventListener("scroll", () => {
  const goUp = document.getElementsByClassName("go-up")[0];
  if (window.scrollY > 400) {
    goUp.classList.remove("opacity-0");
  } else {
    goUp.classList.add("opacity-0");
  }
});

window.onload = () => {
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 1,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    if (entries[0].isIntersecting) {
      document.querySelector(".cake-img").style.transform = "translate(0px, 0)";
      observer.unobserve(entries[0].target);
    }
  }, options);

  observer.observe(document.querySelector(".order-button"));
};
