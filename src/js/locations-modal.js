(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-locations-modal-open]"),
    closeModalBtn: document.querySelector("[data-locations-modal-close]"),
    modal: document.querySelector("[data-locations-modal]"),
    body: document.querySelector('body'),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }

  function removeMenu() {
    refs.modal.classList.add('is-hidden');
    refs.body.classList.remove('no-scroll');
  }
})();