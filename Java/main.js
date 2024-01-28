
$('#CPF').mask('000.000.000-00'),

$('#CEP').mask('00000-000'),

$('#telefone').mask('(00) 00000-0000'),

$('form').validate({
    rules:{
        nome:{
            required: true,
            minlength: 4
        },
        email:{
            required: true,
            email: true
        },
        CPF:{
            required: true,
            minlength:14
        },
        telefone:{
            required: true,
            minlength:15
        },
        CEP:{
            required: true,
            minlength:9
        },
        endereco:{
            required: true,
            minlength: 5
        }
    },
    messages:{
        nome: 'Favor inserir nome',
        email: 'Favor inserir email',
        CPF: 'Favor inserir CPF',
        telefone: 'Favor inserir telefone',
        CEP: 'Favor inserir CEP',
        endereco: 'Favor inserir Endereço',
    }
})