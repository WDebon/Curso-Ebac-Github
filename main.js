const atividade = $('#tarefa')
const added_Date = $('#data')
const classOff = $('.off')
const date = new Date()
const year = date.getFullYear()
const day = date.getDate()
const month = date.getMonth()
var current_Date = "[" + day + "/" + month + "/" + year + "]";

function write(at, dat, cdat) {

    let taf = $(
        ` <li class="off">
        <span><img src="./Red check.png"></span>
        <span class="txt">${at.val()}</span>
        <span class="date">${dat}</span>
            </li>`
    ).appendTo('.list');

    $(taf).click(function (e) {

        /*taf já está selecionando o container inteiro do Li, então usando o $(this) podemos selecionar o container(li) 
        ou usando $('x',this) podemos especificar o que queremos dentro dele; Ex: $('u', this)
        //a falta do $(this) causa que o jquery mude todos os elementos; Ex: $('li')*/
        $(this).removeClass("off")
        $(this).addClass("on")
        $('img', this).attr("src", "Green check.png")
        $('.date', this).replaceWith(`<span class="date">${cdat}</span>`);
    });

}

$('form').submit(function (e) {
    e.preventDefault();

    //esta vaiável esta:pegando o valor de AD; dividindo baseado no -; transformando o array em string que nos dá x,x,x; trocando o , por /
    let new_AddDate = "[" + added_Date.val().split("-").reverse().toString().replaceAll(",", "/") + "]"
    write(atividade, new_AddDate, current_Date)

    atividade.val("")
    added_Date.val("")
});


