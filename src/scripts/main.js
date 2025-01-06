document.addEventListener("DOMConentloaded",function(e){
    e.preventDefault();
    document.getElementById("form-sorted").addEventListener("submit",function(){
        let maxNumber = document.getElementById("maxNumber").value;
        maxNumber = parseInt(maxNumber);

        let randomNumber = Math.random() * maxNumber;
        randomNumber = Math.floor(randomNumber + 1)
        // alert(randomNumber)

        document.getElementById("result-number").innerText = randomNumber;
        document.querySelector(".result").style.display = "block";
    })
})