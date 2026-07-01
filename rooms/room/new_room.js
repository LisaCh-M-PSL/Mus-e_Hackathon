document.addEventListener("DOMContentLoaded", () => {

    const grid = document.getElementById("minerals")

    const urlParams = new URLSearchParams(window.location.search);
    const lettreSalle = urlParams.get('salle');
    if(LANGU=="fr"){
        document.getElementById("room_name").innerText = `Salle ${lettreSalle}`
        document.title = `Salle ${lettreSalle}`
    }
    else if(LANGU=="en"){
        document.getElementById("room_name").innerText = `Room ${lettreSalle}`
        document.title = `Room ${lettreSalle}`
    }
    

    const dict = {"G":["","H"], "H":["G","I"], "I":["H","K"], "K":["I","L"], "L":["K","M"], "M":["L","N"], "N":["M","O"], "O":["N",""]}
    const change = document.getElementById("change")
    if (lettreSalle!="G"){
        const previous = document.createElement("section");
        previous.classList.add("mineral") ;
        previous.id = "previous"
        if (LANGU == "fr"){
            previous.innerText= `Vers salle ${dict[lettreSalle][0]}`
            previous.addEventListener('click', ()=>{
                window.location.href=`/rooms/room/room.html?salle=${dict[lettreSalle][0]}`
            })
        }
        else if(LANGU == "en"){
            previous.innerText= `Go to room ${dict[lettreSalle][0]}`
            previous.addEventListener('click', ()=>{
                window.location.href=`/rooms/room/room_e.html?salle=${dict[lettreSalle][0]}`
            })
        }
        change.appendChild(previous);
    }

    if (lettreSalle!="O"){
        const next = document.createElement("section");
        next.classList.add("mineral") ;
        next.id = "next"
        if(LANGU == "fr"){
            next.innerText= `Vers salle ${dict[lettreSalle][1]}`
            next.addEventListener('click', ()=>{
                window.location.href=`/rooms/room/room.html?salle=${dict[lettreSalle][1]}`
            })
        }
        else if(LANGU == "en"){
            next.innerText= `Go to room ${dict[lettreSalle][1]}`
            next.addEventListener('click', ()=>{
                window.location.href=`/rooms/room/room_e.html?salle=${dict[lettreSalle][1]}`
            })
        }
        change.appendChild(next);
        
    }


    document.getElementById("back").addEventListener('click',()=>{
        if(LANGU=="fr"){
            window.location.href = "/rooms/rooms.html";
        }
        else if(LANGU=="en"){
            window.location.href = "/rooms/rooms_e.html";
        }
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
            newbox.setAttribute("data-audio", `./audio/${mineral.audio}`)
            newbox.setAttribute("data-desc", mineral.desc)
            newbox.setAttribute("data-legende", mineral.legende)
            newbox.setAttribute("data-legende1", mineral.legende1)
            newbox.setAttribute("data-photo", mineral.photo)
            newbox.innerHTML= `
            <img src="./images/${mineral.tableau}" alt="photo de ${mineral.nom}" />
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
const leftphotobtn = document.getElementById('prev-btn'); 
const rightphotobtn = document.getElementById('next-btn');


document.querySelectorAll('.mineral').forEach(mineral => {
    mineral.addEventListener('click', () => {
        const nom = mineral.getAttribute('data-nom');
        const desc = mineral.getAttribute('data-desc');
        const audioSrc = mineral.getAttribute('data-audio');
        const tableauSrc = mineral.querySelector('img').src;
        const legende = mineral.getAttribute('data-legende');
        const legende1 = mineral.getAttribute('data-legende1');
        const phothoSrc = `./images/${mineral.getAttribute('data-photo')}`;


        modalTitle.textContent = nom;
        modalDesc.textContent = desc;
        modalImg.src = tableauSrc;
        modalAudio.src = audioSrc;
        modalLegende.textContent = legende;

        leftphotobtn.style.display = "none" ;
        rightphotobtn.style.display = "block" ;
        

        leftphotobtn.addEventListener('click', () => {
            modalImg.src = tableauSrc ;
            modalLegende.textContent = legende;
            leftphotobtn.style.display = "none" ;
            rightphotobtn.style.display = "block" ;
        })

        rightphotobtn.addEventListener('click', () => {
            modalImg.src = phothoSrc ;
            modalLegende.textContent = legende1;
            rightphotobtn.style.display = "none" ;
            leftphotobtn.style.display = "block" ;
        })

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