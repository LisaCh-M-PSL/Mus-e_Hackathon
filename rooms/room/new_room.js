document.addEventListener("DOMContentLoaded", () => {

    const grid = document.getElementById("minerals")

    const urlParams = new URLSearchParams(window.location.search);
    const lettreSalle = urlParams.get('salle');

    document.getElementById("room_name").innerText = `Salle ${lettreSalle}`
    document.title = `Salle ${lettreSalle}`

    const dict = {"G":["","H"], "H":["G","I"], "I":["H","K"], "K":["I","L"], "L":["K","M"], "M":["L","N"], "N":["M","O"], "O":["N",""]}
    const change = document.getElementById("change")
    if (lettreSalle!="G"){
        const previous = document.createElement("section");
        previous.classList.add("mineral") ;
        previous.id = "previous"
        previous.innerText= `Vers salle ${dict[lettreSalle][0]}          `
        change.appendChild(previous);
        document.getElementById("previous").addEventListener('click', ()=>{
            window.location.href=`/rooms/room/room.html?salle=${dict[lettreSalle][0]}`
        })
    }

    if (lettreSalle!="O"){
        const next = document.createElement("section");
        next.classList.add("mineral") ;
        next.id = "next"
        next.innerText= `Vers salle ${dict[lettreSalle][1]}          `
        change.appendChild(next);
        document.getElementById("next").addEventListener('click', ()=>{
            window.location.href=`/rooms/room/room.html?salle=${dict[lettreSalle][1]}`
        })
    }


    document.getElementById("back").addEventListener('click',()=>{
        window.location.href = "/rooms/rooms.html";
    })
    
    fetch('./data.json')
        .then(res => res.json())
        .then(data => {
            console.log(data);

        const room_data = data.filter((lign)=>lign.salle == lettreSalle)
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