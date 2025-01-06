document.addEventListener('DOMContentLoaded',function(event){
    document.getElementById('form-sorted').addEventListener('submit',function(event){
        event.preventDefault();

        let maxNumber = document.getElementById('maxNumber').value;
        maxNumber = parseInt(maxNumber);

        let randomNumber = Math.random() * maxNumber;
        randomNumber = Math.floor(randomNumber + 1)
        // alert(randomNumber)

        document.getElementById('result-number').innerText = randomNumber;
        document.querySelector('.result').style.display = 'block';
    })
})