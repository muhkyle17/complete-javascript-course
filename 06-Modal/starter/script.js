'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');


// This will open the modal with the overlay by removing the hidden class in the HTML 
const openModal = function() {
    console.log('Button clicked');
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');

    // modal.style.display = 'block';
    // overlay.style.display = 'block';
};

// This will make the modal and overlay disappear by adding the hidden class
const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

// This loop is for each of the buttons (from 1 to 3) so that it will open the modal and overlay
for (let i = 0; i < btnsOpenModal.length; i++) {
    btnsOpenModal[i].addEventListener ('click', openModal)
}

//These are event listeners to remove the overlay and modal by clicking either the X button or the overlay part 
btnCloseModal.addEventListener('click', closeModal)
overlay.addEventListener('click', closeModal)

document.addEventListener('keydown', function(e) {
    console.log(e.key);

    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
            closeModal();
    }
})