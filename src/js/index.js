document.addEventListener('DOMContentLoaded', () => {
  const fileInput = document.querySelector('.input-file');
  const fileSelected = document.querySelector('.input-file__selected');
  const removeButton = document.querySelector('.input-file__remove');
  let fileName = '';

  fileInput?.addEventListener('change', ({ target: { value } }) => {
    fileName = value.split('\\').pop();
    if (fileName) {
      fileSelected.innerHTML = fileName;
      removeButton.classList.remove('hidden');
      removeButton.addEventListener('click', () => {
        removeButton.classList.add('hidden');
        fileInput.value = '';
        fileSelected.innerHTML = '';
      });
    }
  });

  const modalContainer = document.querySelector('.modal__container');
  const modal = document.querySelector('.modal');
  const projectContaniers = document.querySelectorAll('.project__container');
  const modalCloseButton = document.querySelector('.modal .close');

  projectContaniers.forEach((container) => {
    container.addEventListener('click', () => {
      modalContainer.classList.add('show');
    });
  });

  modalCloseButton.addEventListener('click', () => {
    modalContainer.classList.remove('show');
  });

  modalContainer.addEventListener('click', () => {
    modalContainer.classList.remove('show');
  });

  modal.addEventListener('click', (event) => event.stopPropagation());

  const text = document.querySelectorAll('.animate');

  setTimeout(() => {
    text[0].classList.add('reveal');
  }, 500);
  setTimeout(() => {
    text[1].classList.add('reveal');
  }, 800);

  const headerBg = document.querySelector('.bg');
  document.addEventListener('scroll', () => {
    if (window.scrollY > 250) {
      headerBg.setAttribute('style', 'opacity: 1');
    }
    if (window.scrollY < 250) {
      headerBg.setAttribute('style', 'opacity: 0');
    }
  });

  const nav = document.querySelector('.nav__mobile');
  const toggle = document.querySelector('#toggle');

  nav.addEventListener('click', () => {
    toggle.checked = !toggle.checked;
  });
});
