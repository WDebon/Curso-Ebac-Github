const InputA = document.getElementById('imA');
const InputB = document.getElementById('imB');
const erro = document.querySelectorAll(".inp"); // querySelector deixa você pegar qualquer parte do html
const butN = document.getElementById("form");
const menOr = document.querySelector(".men")

menOr.classList.remove("men")

// let erroA = document.getElementById('erroa');
// let erroB = document.getElementById('errob');

function comparando(A, B) {
    return A < B;
}

//function(e) é porque estamos pegando o evento para alterar, no caso o submit
butN.addEventListener('submit', function (e) {

    if(comparando(InputA.valueAsNumber,InputB.valueAsNumber)){
        alert("Deu certo!")

        menOr.classList.remove("men")

        for(var i=0; i<erro.length; i++){
            erro[i].style.display = "none"
            erro[i].classList.remove("exp")
        }
        // erroa.style.display = "none"
    }else{

        menOr.classList.add("men")
        
        for(var i=0; i<erro.length; i++){
            erro[i].style.display = "block"
            erro[i].classList.add("exp")
        }
        
        e.preventDefault() //vai parar do evento fazer o que ele geralmente faz
        // errob.style.display = "block"
    }

})