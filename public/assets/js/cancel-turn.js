let cancelBtns = document.querySelectorAll('.cancel-turn-btn');

console.log(cancelBtns);

if (cancelBtns) {

    cancelBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelector('#turn-id').value = btn.dataset.id;

            let modal = document.querySelector('.cancel-modal');
            modal.style.display = 'flex';
        })

    });

}

let closeAlertBtn = document.querySelector('.close-cancel-turn-btn');

closeAlertBtn.addEventListener('click', () => {

    let addTurnModal = document.querySelector('.cancel-modal');
    addTurnModal.style.display = 'none';
})


let acceptCancelBtn = document.querySelector('.accept-cancel-turn-btn');

acceptCancelBtn.addEventListener('click', () => {
    let addTurnModal = document.querySelector('.cancel-modal');
    addTurnModal.style.display = 'none';
})