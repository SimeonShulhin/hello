window.addEventListener('scroll', () => {
  const goUp = document.getElementsByClassName('go-up')[0];
  if (window.scrollY > 400) {
    goUp.classList.remove('opacity-0');
  } else {
    goUp.classList.add('opacity-0');
  }
});
