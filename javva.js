(function(){

  var formulario = document.getElementsByName('formulario')[0],
     elementos = formulario.elements,
     boton = document.getElementById('btn');

  var validarNombre = function(e){
      if (formulario.nombre.value == 0) {
        alert("Completa el campo nombre");
        e.preventDefault();
       }
  };

  var validarCheckbox = function(e){
      if (formulario.terminos.checked == false) {
        alert("Acepta los Terminos");
        e.preventDefault();
      }
  };

  var validar = function(e){
    validarNombre(e);
    validarCheckbox(e);
  };
formulario.addEventListener("submit", validar);
}())