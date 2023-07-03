(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal5-open]"),
    closeModalBtn: document.querySelector("[data-modal5-close]"),
    modal: document.querySelector("[data-modal5]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();