(function ($) {
  $('#botao').on('click', function (event) { 
    var data = document.getElementsByTagName('input');
    var genderValue = $("input[name='gender']:checked").val();
    if (genderValue == null) {
      alert('Selecione seu gênero.')
    };
      var dadosFormulario = {};
        for (var i = 0; i < data.length; i++) {
        dadosFormulario[data[i].name] = data[i].value;
        }
      
      dito.identify({
        id: dito.generateID(dadosFormulario.email),
        name: dadosFormulario.name,
        email: dadosFormulario.email,
        location: dadosFormulario.cidade,
        gender: genderValue,
        data: {
          cpf: dadosFormulario.cpf,
          cargo: dadosFormulario.cargo
        }
      });
      
    event.preventDefault();
  }); 
})(jQuery);