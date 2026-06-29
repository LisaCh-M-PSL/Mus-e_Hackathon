const modal = document.getElementById('audio-modal');
const closeModalBtn = document.getElementById('close-modal');

const modalTitle = document.getElementById('modal-title');
const modalImg = document.getElementById('modal-img');
const modalAudio = document.getElementById('modal-audio');
const modalDesc = document.getElementById('modal-desc');

document.querySelectorAll('.mineral').forEach(mineral => {
    mineral.addEventListener('click', () => {
        const nom = mineral.getAttribute('data-nom');
        const desc = mineral.getAttribute('data-desc');
        const audioSrc = mineral.getAttribute('data-audio');
        const imgSrc = mineral.querySelector('img').src;

        modalTitle.textContent = nom;
        modalDesc.textContent = desc;
        modalImg.src = imgSrc;
        modalAudio.src = audioSrc;

        modal.showModal();
        modalAudio.play();
    });
});

closeModalBtn.addEventListener('click', () => {
    modal.close();
});

modal.addEventListener('close', () => {
    modalAudio.pause();
    modalAudio.currentTime = 0;
});