$('#botao').on('click', function (event) { 
  var data = document.getElementsByTagName('input');
  var genderValue = $("input[name='gender']:checked").val();
  if (genderValue == null) {
    alert('Selecione seu gênero.')
  };
    var object = {};
    for (var i = 0; i < data.length; i++) {
      object[data[i].name] = data[i].value;
    }
    //var genderValue = $("input[name='gender']:checked").val();
    dito.identify({
      id: dito.generateID(object.email),
      name: object.name,
      email: object.email,
      location: object.cidade,
      gender: genderValue,
      data: {
        cpf: object.cpf,
        cargo: object.cargo
      }
    });
    
  event.preventDefault();
  console.log(object)
  console.log(dito.identify())
}); 