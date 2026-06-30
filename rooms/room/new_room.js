document.addEventListener("DOMContentLoaded", () => {

    const grid = document.getElementById("minerals")

    fetch('./data.json')
        .then(res => res.json())
        .then(data => {
            console.log(data);
        
        const room_data = data.filter((lign)=>lign.salle == "H")
            console.log(room_data);

        for (mineral of room_data){
            const newbox = document.createElement("section");
            newbox.classList.add("mineral") ;
            newbox.setAttribute("data-nom", mineral.nom)
            newbox.setAttribute("data-audio", mineral.audio)
            newbox.setAttribute("data-desc", mineral.desc)
            newbox.setAttribute("data-legende", mineral.legende)
            newbox.innerHTML= `
            

            <img src="./images/${mineral.photo}" alt="photo de ${mineral.nom}" />
            <div>${mineral.nom}</div>
            `
            grid.appendChild(newbox);
        }   
        
        

        const modal = document.getElementById('audio-modal');
const closeModalBtn = document.getElementById('close-modal');

const modalTitle = document.getElementById('modal-title');
const modalImg = document.getElementById('modal-img');
const modalAudio = document.getElementById('modal-audio');
const modalDesc = document.getElementById('modal-desc');
const modalLegende = document.getElementById('modal-legende'); 

document.querySelectorAll('.mineral').forEach(mineral => {
    mineral.addEventListener('click', () => {
        const nom = mineral.getAttribute('data-nom');
        const desc = mineral.getAttribute('data-desc');
        const audioSrc = mineral.getAttribute('data-audio');
        const imgSrc = mineral.querySelector('img').src;
        const legende = mineral.getAttribute('data-legende');

        modalTitle.textContent = nom;
        modalDesc.textContent = desc;
        modalImg.src = imgSrc;
        modalAudio.src = audioSrc;
        modalLegende.textContent = legende;

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





    })
})