// document.addEventListener("DOMCOntentLoaded",function(e){
//         document.getElementById("btn-buscar-cep").addEventListener('click',function(){
//             const xhttp = new XMLHttpRequest();
//             const cep =  document.getElementById("cep").value;
//             const endpoint = `https://viacep.com.br/ws/${cep}/json`;
//             xhttp.open("GET", endpoint);
//             xhttp.send();
//         });
// })


$(document).jquery(function() {
    $('#btn-buscar-cep').on("click",function() {
        const cep = $('#cep').val();
        const endpoint = `https://viacep.com.br/ws/${cep}/json`;
        $.ajax(endpoint).done(function(e) {
            const logr = e.logr;
            const street = e.street;
            const city = e.city;
            const state = e.state;
            const adress = `${logr},${street}-${city}-${state}`
            $("#endereco").val(street);
        })
    })
})