// Abrir Modal para agregar turno
let openModalBtn = document.querySelector('.addBtn');

if (openModalBtn) {
    openModalBtn.addEventListener('click', () => {
        let modal = document.querySelector('.modal');
        modal.style.display = 'flex';
    })
}

let closeModalBtn = document.querySelector('.close-btn');
closeModalBtn.addEventListener('click', () => {
    let modal = document.querySelector('.modal');
    modal.style.display = 'none';
})





// Generacion temporal de cartas

// CARTAS DE TURNOS
let cardContainer = document.querySelector('.card-container');

for (let i = 0; i < 3; i++) {
    let card = document.createElement('div');
    card.classList.add('consulta-card');
    
    let statusIcon = document.createElement('div');
    let statusBadge = document.createElement('div');
    statusBadge.classList.add('status-badge');


    if (i == 2 ) { 
        statusIcon.classList.add('icon');
        statusIcon.innerHTML = '⏳ Pendiente';
        statusBadge.classList.add('pending-icon');
        card.classList.add('pending-card');
    }
    else{
        statusIcon.classList.add('icon');
        statusIcon.innerHTML = '✓ Confirmado';
        statusBadge.classList.add('check-icon');
        card.classList.add('confirmed-card');
    }

    
    statusBadge.appendChild(statusIcon);

    card.innerHTML = `
                     
    <div class="card-header">
        <h1 class="card-title">Consulta Estándar</h1>
        ${statusBadge.outerHTML}
    </div>

    <div class="card-line"> </div>

    <div class="card-info-section">
        <div class="card-info-item">
            <div class="card-info-icon">📅</div>
            <div class="card-info-text">Jueves, 22 Mayo</div>
        </div>
        
        <div class="card-info-item">
            <div class="card-info-icon">🕐</div>
            <div class="card-info-text">10:00 - 11:00</div>
        </div>
        
        <div class="card-info-item">
            <div class="card-info-icon">👨‍⚕️</div>
            <div class="card-info-text">Dra. Ana Martinez</div>
        </div>
        
        <div class="card-info-item">
            <div class="card-info-icon">📍</div>
            <div class="card-info-text">Consultorio 3, calle 125, Olavarría</div>
        </div>
    </div>

    <div class="card-line"> </div>

    <div class="card-buttons">
        <button class="btn primary-btn cancel-turn-btn" data-id="${i}">
            <span class="btn-icon" >✕</span>
            Cancelar
        </button>
        <button class="btn secondary-btn update-turn-btn" data-id="${i}">
            <span class="btn-icon">↻</span>
            Reprogramar
        </button>
    </div>
    
    `

    cardContainer.appendChild(card);
}


// CARTAS DE PROFESIONALES
let professionalCardContainer = document.querySelector('.professional-card-container');


for (let i = 0; i < 3; i++) {
    let professionalCard = document.createElement('a');
    professionalCard.href = 'cliente/professional/'+i;
    professionalCard.classList.add('professional-card');

    professionalCard.innerHTML = `<div class="avatar"></div>
            
                        <div class="professional-info">
                            <div class="professional-name">Dra. Ana Martinez</div>
                            <div class="professional-badge">Doctora</div>
                        </div>
            
                        <div class="arrow"> &#8594; </div>`

    professionalCardContainer.appendChild(professionalCard);
}

