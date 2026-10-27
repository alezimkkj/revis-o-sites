const num1 = document.querySelector("#num1");
const num2 = document.querySelector("#num2");
const btnSoma = document.querySelector("#btnSoma");
const btnSub = document.querySelector("#btnSub");
const btnMulti = document.querySelector("#btnMulti");
const btnDiv = document.querySelector("#btnDiv");
const resultado = document.querySelector("#resultado");





// Exercicio 1 do modulo 1
const calcularMedia = (n1, n2, n3) => {
    return (n1 + n2 + n3) / 3;
};


media = calcularMedia(7, 8, 9);
console.log(media > 7 ? "Aprovado" : "Reprovado");


// Exercicio 2 do modulo 1
const verificarTipo = (variavel) => {
    console.log(`A variável é tipo ${typeof variavel}`);
};


verif

verificarTipo("Oi");
verificarTipo(5);
verificarTipo(true);


// Exercicio 3 do modulo 1
const idade = 17;
const statusIdade = (idade >= 18 ? "Maior de idade" : "Menor de idade");
console.log(statusIdade);


// Exercicio 4 do modulo 1
const numero = 7;
console.log(`TABUADA DO ${numero}`);
for (let i = 0; i < 10; i++) {
    console.log(`${numero} X ${i + 1} = ${numero * 1}`);
};


// Exercicio 5 do modulo 1
const diaSemana = 3;
switch (diaSemana) {
    case 1:
        console.log("Domingo");
        break;
    case 2:
        console.log("Segunda-feira");
        break;
    case 3:
        console.log("Terça-feira");
        break;
    case 4:
        console.log("Quarta-feira");
        break;
    case 5:
        console.log("QUinta-feira");
        break;
    case 6:
        console.log("Sexta-feira");
        break;
    case 7:
        console.log("Sábado");
        break;
    default:
        console.log("Número inválido!");
        break;
};


// Exercicio 6 do modulo 2
const calcularArea = (base, altura) => {
    return base * altura;
};


console.log(`A área é de ${calcularArea(3, 7)}m.`);


// Exercicio 7 do modulo 2
const listaDeCompras = ['Arroz',
    'Feijão', 'Batata'];


listaDeCompras.push('Macarrão');
listaDeCompras.unshift('Suco');
listaDeCompras.pop();


console.log(listaDeCompras);


// Exercicio 8 do modulo 2
const alunos = [
    { nome: 'Ana', nota: 8.5, idade: 20 },
    { nome: 'João', nota: 6.7, idade: 22 },
    { nome: 'Maria', nota: 9.3, idade: 19 },
    { nome: 'Carlos', nota: 5.0, idade: 21 },
    { nome: 'Beatriz', nota: 7.8, idade: 20 }
];


const aprovados = alunos.filter((aluno) => {
    return aluno.nota >= 7;
});
console.log(aprovados)


const nomes = alunos.map((aluno) => {
    return aluno.nome;
});
console.log(nomes);


const somaIdades = alunos.reduce((idade, aluno) => {
    return idade + aluno.idade;
}, 0);
console.log(`A média de idade da turma é de ${somaIdades / alunos.length} anos.`);


alunos.find((aluno) => {
    if (aluno.nota < 6) {
        console.log(aluno);
    };
});


// Modulo 3 exercicio 9
const titulo = document.getElementById("titulo");
const btnMudar = document.getElementById("btnMudar");


btnMudar.addEventListener("click", () => {
    titulo.innerText = "Título Alterado com Sucesso!";
});


// Modulo 3 exercicio 10
let contagem = 0;
const contador = document.getElementById("contador");
const btnIncrementar = document.getElementById("btnIncrementar");


btnIncrementar.addEventListener("click", () => {
    contagem++;
    contador.innerText = contagem;
});


// Modulo 3 exercicio 11
const paragrafos = document.querySelectorAll(".paragrafo");
const btnDestacar = document.querySelector("#btnDestacar");


btnDestacar.addEventListener("click", () => {
    paragrafos.forEach((paragrafo) => {
        paragrafo.classList.add('destaque');
    })
});


// Modulo 3 exercicio 12
const campoInput = document.querySelector("#campoInput");
const textoRefletido = document.querySelector("#textoRefletido");


campoInput.addEventListener('keyup', () => {
    textoRefletido.innerText = campoInput.value;
});
