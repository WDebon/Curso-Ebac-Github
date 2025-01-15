import * as readline from 'readline';


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function mul(a: number, b: number): number {
  return a * b;
}


function saudacao(nome: string): string {
  return `Olá ${nome}`;
}


function lerNumero(pergunta: string): Promise<number> {
  return new Promise((resolve, reject) => {
    rl.question(pergunta, (input: string) => {
      try {
        const numero = parseFloat(input);
        if (isNaN(numero)) {
          throw new Error('Por favor insira uma entrada valida.');
        }
        resolve(numero);
      } catch (error) {
        reject(error);
      }
    });
  });
}


function lerString(pergunta: string): Promise<string> {
  return new Promise((resolve) => {
    rl.question(pergunta, (input: string) => {
      resolve(input.trim());
    });
  });
}

async function main() {
  try {
    let num1: number;
    let num2: number;
    let nome: string;

    
    do {
      try {
        num1 = await lerNumero('Entre com o valor A: ');
        break;
      } catch (error) {
        if (error instanceof Error) {
          console.error(error.message);
        } else {
          console.error('Erro desconhecido:', error);
        }
      }
    } while (true);

   
    do {
      try {
        num2 = await lerNumero('Entre com o Valor B: ');
        break;
      } catch (error) {
        if (error instanceof Error) {
          console.error(error.message);
        } else {
          console.error('Erro desconhecido:', error);
        }
      }
    } while (true);

   
    nome = await lerString('Insira Seu Nome: ');

 
    const resultadoMultiplicacao = mul(num1, num2);
    const mensagemSaudacao = saudacao(nome);

    const resposta = `O Resultado da multiplicação é: ${resultadoMultiplicacao}, ${mensagemSaudacao}`;
    console.log(resposta);

  } catch (error) {
    if (error instanceof Error) {
      console.error('Erro inesperado:', error.message);
    } else {
      console.error('Erro inesperado:', error);
    }
  } finally {
    rl.close(); 
  }
}

main();
