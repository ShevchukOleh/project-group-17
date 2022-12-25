(() => {
  const trackScroll = () => {
    const scrolled = window.pageYOffset;
    const coords = document.documentElement.clientHeight;

    if (scrolled > coords) {
      goTopBtn.classList.add('anchor-top-show');
    }
    if (scrolled < coords) {
      goTopBtn.classList.remove('anchor-top-show');
    }
  };

  const backToTop = () => {
    if (window.pageYOffset > 0) {
      window.scrollBy(0, -80);
      setTimeout(backToTop, 0);
    }
  };

  const goTopBtn = document.querySelector('.anchor-top');

  window.addEventListener('scroll', trackScroll);
  goTopBtn.addEventListener('click', backToTop);
})();