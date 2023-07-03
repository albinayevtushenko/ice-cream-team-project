(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal2-open]"),
    openModalBtn2: document.querySelector("[data-modal2-open2]"),
    openModalBtn3: document.querySelector("[data-modal2-open3]"),
    closeModalBtn: document.querySelector("[data-modal2-close]"),
    modal: document.querySelector("[data-modal2]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.openModalBtn2.addEventListener("click", toggleModal);
  refs.openModalBtn3.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();