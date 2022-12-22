(() => {
  const refs = {
    openMenuBtn: document.querySelector('[data-menu-open]'),
    closeMenuBtn: document.querySelector('[data-menu-close]'),
    menu: document.querySelector('[data-menu]'),
    body: document.querySelector('body'),
    menuList: document.querySelector('.menu-list'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);
  

  function toggleMenu() {
    refs.menu.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }

  function removeMenu() {
    refs.menu.classList.add('is-hidden');
    refs.body.classList.remove('no-scroll');
  }
})();



(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-buy-now-modal-open]"),
    closeModalBtn: document.querySelector("[data-buy-now-modal-close]"),
    modal: document.querySelector("[data-buy-now-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();


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


(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-read-more-modal-open]"),
    closeModalBtn: document.querySelector("[data-read-more-modal-close]"),
    modal: document.querySelector("[data-read-more-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();


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


(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-franchise-modal-open]"),
    closeModalBtn: document.querySelector("[data-franchise-modal-close]"),
    modal: document.querySelector("[data-franchise-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();