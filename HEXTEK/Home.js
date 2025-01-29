function botao(){
     window.location = "Favoritas.html";
}

document.addEventListener('DOMContentLoaded', function () {
    const input = document.getElementById('pesq');
   
    input.addEventListener('focus', function() {
        input.placeholder = '';
    });
    
    input.addEventListener('blur', function() {
        input.placeholder = 'O que deseja ouvir?';
        });
    });