(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-about-product-modal-open]"),    
    closeModalBtn: document.querySelector("[data-about-product-modal-close]"),
    modal: document.querySelector("[data-about-product-modal]"),
    
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();





