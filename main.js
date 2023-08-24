const atividade = $('#tarefa')
const added_Date = $('#data')
const classOff = $('.off')
const date = new Date()
const year = date.getFullYear()
const day = date.getDate()
const month = date.getMonth() 
// const milli = date.getTime()
// let seconds = Math.trunc(milli/1000)
// let minutes = Math.trunc(seconds/60)
// let hour = Math.trunc(minutes/60)
// var time = hour+":"+minutes+":"+seconds
var current_Date = "["+day+"/"+month+"/"+year+"]";

console.log(current_Date)

function write(at,dat,cdat){

    let taf = $(
        ` <li class="off">
        <span><img src="./Red check.png"></span>
        <span class="txt">${at.val()}</span>
        <span class="date">${dat.val()}</span>
            </li>`
        ).appendTo('ul');

        const tafLi = $('li')

        $(taf).click(function (e) { 
            tafLi.
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
    
        console.log("foi")
    
        atividade.val("")
        added_Date.val("") 
});

$(classOff).click(function (e) { 
    console.log("clicou")
    // $(`<li class="on"><span><img src="./green check.png"></span><span class="txt">${atividade.val()}</span><span class="date">${current_Date.val()}</span></li>`).appendTo(body);
});





// function Stringing(func){
//     const splitString = func.split(" ");
//     return splitString
//     // for(i=0; i<e;i++){
        
//     // }
// }

