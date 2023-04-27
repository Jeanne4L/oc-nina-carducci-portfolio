let overlay = document.querySelector('.overlay');
let gallery = document.querySelector('.gallery');
let galleryItems = document.querySelectorAll('.gallery-item');

for (let i=0; i< galleryItems.length; i++) {
    galleryItems[i].addEventListener('click', () => {
        overlay.style.display = 'block';

        let modal = document.createElement('div');
        modal.classList.add('modal');
        document.body.appendChild(modal);
    })
}
overlay.addEventListener('click', () => {
    overlay.style.display = 'none';
})