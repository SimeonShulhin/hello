let goUp = document.getElementsByClassName('go-up');
console.log(goUp);

window.addEventListener('scroll', () => {
  if (window.scrollY > 400) {
    goUp[0].classList.remove('opacity-0');
  } else {
    goUp[0].classList.add('opacity-0');
  }
});
