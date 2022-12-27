(() => {
  const refs = {
    openModalBtns: document.querySelectorAll("[data-buy-now-modal-open]"),
    closeModalBtn: document.querySelector("[data-buy-now-modal-close]"),
    modal: document.querySelector("[data-buy-now-modal]"),
    body: document.querySelector('body'),
  };

  refs.openModalBtns.forEach(btn => btn.addEventListener('click', toggleModal));
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }

  function removeModal() {
    refs.modal.classList.add('is-hidden');
    refs.body.classList.remove('no-scroll');
  }
})();