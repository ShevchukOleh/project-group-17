(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-locations-modal-open]"),
    closeModalBtn: document.querySelector("[data-locations-modal-close]"),
    modal: document.querySelector("[data-locations-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();