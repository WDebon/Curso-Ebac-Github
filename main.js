const InputA = document.getElementById('imA');
const InputB = document.getElementById('imB');
const erro = document.querySelectorAll(".inp"); //qsAll cria uma ''string'' (Nodelist) então para afetar todos os selecionados temos que tratalo como uma
const varForm = document.getElementById("idForm");
const butOn = document.querySelector("button");
const menOr = document.querySelector(".men"); // querySelector deixa você pegar qualquer parte do html

menOr.classList.remove("men")

// let erroA = document.getElementById('erroa');
// let erroB = document.getElementById('errob');

function comparando(A, B) {
    return A < B;
}

//function(e) é porque estamos pegando o evento para alterar, no caso o submit
varForm.addEventListener('submit', function (e) {
    if (!comparando(InputA.valueAsNumber, InputB.valueAsNumber)){
        e.preventDefault() //vai parar do evento fazer o que ele geralmente faz
    }
})

varForm.addEventListener("keyup", function(e){
        if (comparando(InputA.valueAsNumber, InputB.valueAsNumber)) {

            menOr.classList.remove("men")
            menOr.classList.add("men2")
    
            for (var i = 0; i < erro.length; i++) {
                erro[i].style.display = "none"
                erro[i].classList.remove("exp")
            }
            
            butOn.style.backgroundColor = "#3eaa6e"

            InputA.style.border = "thin dashed green"
            InputB.style.border = "thin dashed green"
            InputA.style.backgroundColor = "#bbe2cd"
            InputB.style.backgroundColor = "#bbe2cd"
    
            InputA.style.outlineColor = "green"
            InputB.style.outlineColor = "green"
    
            // erroa.style.display = "none"
        } else {
    
            menOr.classList.add("men")
            menOr.classList.remove("men2")
    
            for (var i = 0; i < erro.length; i++) {
                erro[i].style.display = "block"
                erro[i].classList.add("exp")
            }
            
            butOn.style.backgroundColor = "grey"

            InputA.style.border = " thin dashed red "
            InputB.style.border = " thin dashed red "
            InputA.style.background = "#f1c4c4"
            InputB.style.background = "#f1c4c4"
    
            InputA. style.outlineColor = "red"
            InputB.style.outlineColor = "red"

            // errob.style.display = "block"
        
    }
})