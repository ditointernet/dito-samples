(function ($) {

  $('#botao').on('click', function (event) { 
    var data = document.getElementsByTagName('input');
    var genderValue = $("input[name='gender']:checked").val();
    if (genderValue == null) {
      alert('Selecione seu gênero.')
    };
    var dadosFormulario = {};
    var email = $("input[name='email']").val();
    var name = $("input[name='name']").val();
    var cidade = $("input[name='cidade']").val();
    var cpf = $("input[name='cpf']").val();
    var cargo = $("input[name='cargo']").val();
    
    $("input[name='email']").val();
    for (var i = 0; i < data.length; i++) {
      dadosFormulario[data[i].name] = data[i].value;
    }
    
    // Envio do usuário
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

    // Envio de evento (OPCIONAL)
    dito.track({
      action: 'cadastrou-landing-page',
      data: {
        origem: 'leads-landign-page'
      }
    })

    console.log(dadosFormulario);
    event.preventDefault();
  }); 
})(jQuery);