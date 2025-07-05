let addTurnBtn = document.querySelector('.add-turn-btn');
if (addTurnBtn) {
    addTurnBtn.addEventListener('click', () => {
        let modal = document.querySelector('.add-turn-modal');
        modal.style.display = 'flex';
    })

}

let closeModalBtn = document.querySelector('.close-btn');
closeModalBtn.addEventListener('click', () => {

    let addTurnModal = document.querySelector('.add-turn-modal');
    addTurnModal.style.display = 'none';
})

// ----------- HORARIOS

let dayContainer = document.querySelector('.day-container');

dayContainer.addEventListener('change', (e) => {
    let day = e.target.value;
    let timeContainer = document.querySelector('.time-container');
    
    timeContainer.innerHTML = '';


    for (let i = 8; i < 16; i++) {
        let hour = document.createElement('button');
        hour.classList.add('time-btn');
        hour.innerHTML = i+':00';

        // Evento para cuando clickee los horarios
        hour.addEventListener('click', (e) => {
            let PreviousSelectedHour = document.querySelector('.time-btn.selected-time');
            
            // Si Existe elimino su clase
            if (PreviousSelectedHour) {
                PreviousSelectedHour.classList.remove('selected-time');
            }
            
            // Agrego la clase seleccionada
            e.target.classList.add('selected-time');
        })
        
        // Agrego los horarios
        timeContainer.appendChild(hour);
    }

})

// Turno
let getDateBtn = document.querySelector('.get-date-button');

getDateBtn.addEventListener('click', () => {
    window.location.href = "/cliente";
});