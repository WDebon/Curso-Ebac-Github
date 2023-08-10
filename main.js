// const InputA = document.getElementById('imA').value;
// const InputB = document.getElementById('imB').value;
const butN = document.getElementById("botSubmit");

// querySelector deixa você pegar qualquer parte do html
// const Box = document.querySelector("input");

function comparando(A, B) {
    return A < B;
}

function getVal(){
    const InputA = document.getElementById("imA").value
    return InputA
}

butN.addEventListener("submit", function (evento) {
    evento.preventDefault();
});

// function(e) é porque estamos pegando o evento para alterar, no caso o submit
// butN.addEventListener('submit', function (e) {
//     e.preventDefault() //vai parar do evento fazer o que ele geralmente faz

//     // let BmaiorA =  comparando(InputA.,InputB.valueAsNumber)
//     // if(BmaiorA){
        
//     //     Box.valueAsNumber = ''
//     // }else{
//     //     alert("Deu errado!")
//     }
// })

// console.log(Box)