let form = document.querySelector('.form-container');


form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    let params = new URLSearchParams(window.location.search);
    let type = params.get('type');

    let hiddenInput = document.getElementById('userType');
    hiddenInput.value = type;
    
    console.log('Tipo enviado:', type);
    //-- Envio el formulario luego de concatenar el tipo
    form.submit();
})