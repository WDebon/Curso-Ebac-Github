<script setup>
    const props = defineProps(["getValor1", "getValor2", "getCalculo", "resultado"]);
</script>

<template>
    <div class="row p-4 mb-3 mt-3 rounded-3">
        <div class="col-md-5">
            <img src="/src/images/prof-image01.png" class="d-block w-100" alt="imagem do professor modelo do site">
        </div>
        <div class="col-md-7">
            <h2>Bem-vindo à nossa Calculadora Aritmética!</h2>
            <p>
                Este site foi desenvolvido para ajudar você a realizar cálculos rápidos e precisos. Para começar, por favor, insira o primeiro valor que deseja utilizar na operação aritmética.
            </p>
            <input required type="number" placeholder="0" class="form-control mb-4" @keyup="props.getValor1"/>
        </div>
    </div>

    <div class="row p-4 mb-3 mt-3 rounded-3">
        <div class="col-md-7">
            <h3>Escolha a Operação Aritmética</h3>
            <p>
                Agora que você já inseriu o primeiro valor, é hora de escolher qual operação deseja realizar. Você pode optar por soma, subtração, multiplicação ou divisão. Selecione a operação desejada para prosseguir.
            </p>
            <select class="form-control text-center" @change="props.getCalculo">
                <option class="subtrair text-center" value="subtrair">-</option>
                <option class="somar text-center" selected value="somar">+</option>
                <option class="dividir text-center" value="dividir">÷</option>
                <option class="multiplicar text-center" value="multiplicar">x</option>
            </select>
        </div>
        <div class="col-md-5">
            <img src="/src/images/prof-image02.png" class="d-block w-100" alt="imagem do professor modelo do site">
        </div>
    </div>

    <div class="row p-4 mb-3 mt-3 rounded-3">
        <div class="col-md-5">
            <img src="/src/images/prof-image03.png" class="d-block w-100" alt="imagem do professor modelo do site">
        </div>
        <div class="col-md-7">
            <h3>Informe o Segundo Valor e Veja o Resultado</h3>
            <p>
                Agora, insira o segundo valor para completar a operação. Assim que o valor for inserido, o cálculo será realizado automaticamente e o resultado será exibido para você. Faça sua escolha e descubra o resultado!
            </p>
            <input required type="number" placeholder="0" class="form-control mb-4" @keyup="props.getValor2"/>
            <div class="col text-center">
            <h3>Resultado:</h3>
            </div>
            <div class="col text-center">
            <h2 class="fs-1 fw-bold ps-2 mb-2">{{ props.resultado }}</h2>
            </div>
        </div>
    </div>
</template>

<style scoped>
.row {
    background-color: rgb(255, 251, 225);
    align-items: center;
}

h2, h3, p {
    font-family: "Sour Gummy", sans-serif;
    font-weight: 400;
    font-style: normal;
}

    .black-text {
        color: black;
    }

    input[type=number]::-webkit-inner-spin-button,
    input[type=number]::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
}

@media screen and (max-width: 768px) {
    .form-control {
        text-align: center;
    }

    select {
        padding-left: 48%;
        padding-right: 48%;
    }
}
</style>