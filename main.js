let InputA = document.getElementById('imA').value;
let InputB = document.getElementById('imB').value;
const butN = document.getElementById("bot");

// querySelector deixa você pegar qualquer parte do html
// const Box = document.querySelector("input");

function comparando(A, B) {
    return A < B;
}

function getVal(){
    const InputA = document.getElementById("imA").value
    return InputA
}

//function(e) é porque estamos pegando o evento para alterar, no caso o submit
butN.addEventListener('submit', function (e) {

    e.preventDefault() //vai parar do evento fazer o que ele geralmente faz

    if(comparando(InputA,InputB)){
        alert("Deu certo!")
        Box.valueAsNumber = ''
    }else{
        alert("Deu errado!")
    }
})