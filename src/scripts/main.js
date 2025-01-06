document.addEventListener("DOMConentloaded",function(){
    document.getElementById("form-sorted").addEventListener("submit",function(){
        let maxNumber = document.getElementById("maxNumber").value;
        maxNumber = parseInt(maxNumber);

        let randomNumber = Math.random() * maxNumber;
        // alert(randomNumber)
    })
})