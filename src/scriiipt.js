
// Array de objetos com informações dos alunos
const alunos = [
    { nome: "João Silva", nota: 7.5 },
    { nome: "Maria Souza", nota: 5.8 },
    { nome: "Pedro Santos", nota: 6.0 },
    { nome: "Ana Oliveira", nota: 8.2 },
    { nome: "Carlos Pereira", nota: 4.7 },
    { nome: "Mariana Costa", nota: 6.5 },
    { nome: "Lucas Rodrigues", nota: 9.0 },
    { nome: "Juliana Almeida", nota: 5.5 }
];

// Função para filtrar alunos com nota maior ou igual a 6
function filtrarAlunosAprovados(listaAlunos) {
    return listaAlunos.filter(aluno => aluno.nota >= 6);
}

// Variável para armazenar alunos aprovados
const alunosAprovados = filtrarAlunosAprovados(alunos);

// Exibição dos resultados
console.log("");
alunos.forEach(aluno => {
    console.log(`${aluno.nome}: ${aluno.nota}`);
});

console.log("\n");
alunosAprovados.forEach(aluno => {
    console.log(`${aluno.nome}: ${aluno.nota}`);
});

// Informações adicionais
console.log("\n");
console.log(`Total de alunos: ${alunos.length}`);
console.log(`Alunos aprovados: ${alunosAprovados.length}`);
console.log(`Porcentagem de aprovação: ${((alunosAprovados.length / alunos.length) * 100).toFixed(2)}%`);
