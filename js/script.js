const modalTrigger = document.querySelector('[data-modal]'),
      modal = document.querySelector('.modal');

function openModal() {
    modal.classList.add('show');
    modal.classList.remove('hide');
    
}

modalTrigger.addEventListener('click', openModal);

function closeModal() {
    modal.classList.add('hide');
    modal.classList.remove('show');
}

modal.addEventListener('click', (e) => {
    if (e.target == modal || e.target.getAttribute('data-close') == '') {
        closeModal();
    }
    console.log(e.target);
});

