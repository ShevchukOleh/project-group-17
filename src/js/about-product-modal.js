(() => {
  const refs = {
    openModalBtns: document.querySelectorAll('[data-about-product-modal-open]'),
    closeModalBtn: document.querySelector('[data-about-product-modal-close]'),
    modal: document.querySelector('[data-about-product-modal]'),
    body: document.querySelector('body'),
  };

  refs.openModalBtns.forEach(btn => btn.addEventListener('click', toggleModal));
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }

  function removeMenu() {
    refs.modal.classList.add('is-hidden');
    refs.body.classList.remove('no-scroll');
  }
})();





