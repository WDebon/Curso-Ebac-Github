
$('#CPF').mask('000.000.000-00'),

$('#CEP').mask('00000-000'),

$('#telefone').mask('(00) 00000-0000'),

$('form').validate({
    rules:{
        nome:{
            required: true
        },
        email:{
            required: true,
            email: true
        },
        CPF:{
            required: true
        },
        telefone:{
            required: true
        },
        CEP:{
            required: true
        },
        endereco:{
            required: true
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