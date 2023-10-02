$(document).ready(function(){

    $('#telefone').mask('(00) 00000-0000',{
        placeholder: "(00) 00000-0000"
    })

   $('form').validate({
        rules: {
            nome :{
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            messagem:{
                reuired:true
            }
        },
        messages: {
            nome: "Por favor, insira o nome completo",
            email: "Por favor, insira um e-mail válido",
            telefone: "Por favor, insira o telefone",
        },
        invalidHandler: function(evento, validador){
            let camposIncorretos = validador.numberOfInvalids();
            if(camposIncorretos){
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        }

   })

})