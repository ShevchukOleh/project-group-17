(() => {
  const refs = {
    openModalBtns: document.querySelectorAll('[data-about-product-modal-open]'),
    closeModalBtn: document.querySelector('[data-about-product-modal-close]'),
    modal: document.querySelector('[data-about-product-modal]'),
  };

  refs.openModalBtns.forEach(btn => btn.addEventListener('click', toggleModal));
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();





