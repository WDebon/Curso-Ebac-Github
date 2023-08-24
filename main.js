const atividade = $('#tarefa')
const added_Date = $('#data')
const classOff = $('.off')
const date = new Date()
const year = date.getFullYear()
const day = date.getDate()
const month = date.getMonth() 
var current_Date = "["+day+"/"+month+"/"+year+"]";
console.log(current_Date)
// const milli = date.getTime()
// let seconds = Math.trunc(milli/1000)
// let minutes = Math.trunc(seconds/60)
// let hour = Math.trunc(minutes/60)
// var time = hour+":"+minutes+":"+seconds

function write(at,dat,cdat){

    let lili = `<li class="off">`;

    let taf = $(
        ` ${lili}
        <span><img src="./Red check.png"></span>
        <span class="txt">${at.val()}</span>
        <span class="date">${dat}</span>
            </li>`
        ).appendTo('ul');

        let dat_Area = $(`<span class="date">`)

        $(taf).click(function (e) { 
            if(e.target == $('li')||$('span')||$('img')){
                $(this).removeClass("off")
                $(this).addClass("on")
                $('img',this).attr("src", "Green check.png")
                $('.date', this).replaceWith(`<span class="date">${cdat}</span>`);
            }
            console.log("clicoufunc")
            console.log($(this))
            console.log(e.target)
        });

        
        
}

// $('form').click(function (e) { 
//     
// });

console.log($('#butn'))

$('form').submit(function (e) { 
    // const li = $('ul')
    e.preventDefault();
        // li.appendTo('body')

        console.log(added_Date.val().split())
        console.log(added_Date.val().split("-").reverse())
        let new_AddDate = "[" + added_Date.val().split("-").reverse().toString().replaceAll(",", "/") + "]"
        write(atividade,new_AddDate,current_Date)  

        atividade.val("")
        added_Date.val("") 
});

// function Stringing(func){
//     const splitString = func.split(" ");
//     return splitString
//     // for(i=0; i<e;i++){
        
//     // }
// }

