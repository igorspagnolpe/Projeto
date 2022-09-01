var inputs = document.getElementById('comentario');
for(var i = 0; i < 1; i++){
    inputs.addEventListener('focus', function(){
    var place = this.getAttribute('placeholder');
    this.setAttribute('placeholder', '');
    var blur = function(){
      this.setAttribute('placeholder', place);
    }
    this.addEventListener('blur', blur);
  });
}

function mensagem(){
    // const texto = document.querySelector('#comentario')
    var texto = document.getElementById('comentario')   
    if(texto.value == ""){
        alert("Preencha todos os formulários")
    }

    else{
        alert("Mensagem enviada! Obrigado.")
    }    
}
