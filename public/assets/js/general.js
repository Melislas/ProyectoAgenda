let form = document.querySelector('.form-container form');


form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    let params = new URLSearchParams(window.location.search);
    let type = params.get('type');

    let hiddenInput = document.getElementById('userType');
    hiddenInput.value = type;
    
    //-- Envio el formulario luego de concatenar el tipo
    form.submit();
})