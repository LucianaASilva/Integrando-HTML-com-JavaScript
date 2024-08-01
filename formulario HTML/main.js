const form = document.getElementById('FormValores') //formularrio e 
let formValid = false;


function validNumber (valorA,valorB) {
 
    return valorB > valorA
}


form.addEventListener('submit', function(e){
    e.preventDefault();
    let = valorA =parseFloat(document.getElementById("val-a").value);
    let = valorB =parseFloat(document.getElementById("val-b").value);

    const messagesucess = 'Formulario enviado com sucesso! Verificando: <b> CampoA é menor que CampoB!</b>';
    const containermessagesucess = document.querySelector('.success-message');
    
    formValid = validNumber (valorA,valorB);
    
    if (formValid){
        document.querySelector('.error-message').style.display = 'none';
        containermessagesucess.innerHTML = messagesucess;
        containermessagesucess.style.display = 'block';
        document.querySelector('.error-message').style.display = 'none';

        valorA.value = '';
        valorB.value = '';
    } else {
        document.querySelector('.error-message').style.display = 'block';
        containermessagesucess.style.display = 'none';
    }    
})
  
