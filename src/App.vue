<script setup>
import { reactive } from 'vue';
import Cabecalho from './components/Cabecalho.vue';
import Calculadora from './components/Calculadora.vue';
import Rodape from './components/Rodape.vue';

const estado = reactive({
  valor1: 0,
  valor2: 0,
  resultado: 0,
  calculo: 'somar',
})

function getValor1(evento) {
  estado.valor1 = evento.target.value;
  if (estado.valor1 == '') {
    estado.valor1 = 0;
  }
  estado.valor1 = parseFloat(estado.valor1)
  getCalculo();
}

function getValor2(evento) {
  estado.valor2 = evento.target.value;
  if (estado.valor2 == '') {
    estado.valor2 = 0;
  }
  estado.valor2 = parseFloat(estado.valor2)
  getCalculo();
}

function getOperador(evento) {
  estado.calculo = evento.target.value;
  getCalculo();
}

const getCalculo = () => {
  switch (estado.calculo) {
    case 'subtrair':
      return estado.resultado = (estado.valor1 - estado.valor2);
    case 'somar':
      return estado.resultado = (estado.valor1 + estado.valor2);
    case 'dividir':
      if (estado.valor2 == 0) {
        return estado.resultado = "Undefined";
      }
      return estado.resultado = (estado.valor1 / estado.valor2);
    case 'multiplicar':
      return estado.resultado = (estado.valor1 * estado.valor2);
  }
}

</script>

<template>
  <div class="container">
    <Cabecalho />
    <Calculadora :get-valor1="getValor1" :get-valor2="getValor2" :resultado="estado.resultado" :get-calculo="getOperador"/>
    <Rodape />
  </div>
</template>
