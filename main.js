const numeroSenha = document.querySelector('.parametro-senha__texto');
let tamanhoSenha = 12;
numeroSenha.textContent = tamanhoSenha;
const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVXYWZ';
const letrasMinusculas = 'abcdefghijklmnopqrstuvxywz';
const numeros = '0123456789';
const simbolos = '!@%*?';
const botoes = document.querySelectorAll('.parametro-senha__botao');
const campoSenha = document.querySelector('#campo-senha');
const checkbox = document.querySelectorAll('.checkbox');
const forcaSenha = document.querySelector('.forca');

botoes[0].onclick = diminuiTamanho;
botoes[1].onclick = aumentaTamanho;

function diminuiTamanho() {
    if (tamanhoSenha > 1) {
        // tamanhoSenha = tamanhoSenha-1;
        tamanhoSenha--;
    }
    numeroSenha.textContent = tamanhoSenha;
    geraSenha();
}
function aumentaTamanho() {
    if (tamanhoSenha < 20) {
        // tamanhoSenha = tamanhoSenha+1;
        tamanhoSenha++;
    }
    numeroSenha.textContent = tamanhoSenha;
    geraSenha();
}

for (i = 0; i < checkbox.length; i++) {
    checkbox[i].onclick = geraSenha;
}

geraSenha();

function geraSenha() {
    let alfabeto = '';
    if (checkbox[0].checked) {
        alfabeto = alfabeto + letrasMaiusculas;
    }
    if (checkbox[1].checked) {
        alfabeto = alfabeto + letrasMinusculas;
    }
    if (checkbox[2].checked) {
        alfabeto = alfabeto + numeros;
    }
    if (checkbox[3].checked) {
        alfabeto = alfabeto + simbolos;
    }
    let senha = '';
    for (let i = 0; i < tamanhoSenha; i++) {
        let numeroAleatorio = Math.random() * alfabeto.length;
        numeroAleatorio = Math.floor(numeroAleatorio);
        senha = senha + alfabeto[numeroAleatorio];
    }
    campoSenha.value = senha;
    classificaSenha(alfabeto.length);

}

function classificaSenha(tamanhoAlfabeto){
    let entropia = tamanhoSenha * Math.log2(tamanhoAlfabeto);
    console.log(entropia);
    forcaSenha.classList.remove('fraca','media','forte');
    if (entropia > 57){
        forcaSenha.classList.add('forte');
    } else if (entropia > 35 && entropia < 57 ) {
        forcaSenha.classList.add('media');
    } else if (entropia <= 35){
        forcaSenha.classList.add('fraca');
    }
    const valorEntropia = document.querySelector('.entropia');
    valorEntropia.textContent = 2**Math.floor(entropia)/(100e6*60*60*24);
}






.titulo-secundario{
    font-size: 24px;
}

.conteudo-titulo{
    text-align: center;
    margin-top: 80px;
}

.conteudo-senha{
    margin-top: 80px; 
    background: var(--fundo-senha);
    padding: 24px;
    border-bottom: 6px solid var(--borda);
}

#campo-senha{
    background-color: var(--fundo-senha);
    border: none;
    color: var(--branco);
    font-family: var(--roboto-mono);
    font-size: 40px;
    width: 70%;
}

#campo-senha:focus{
    outline: none;
}

.conteudo{
    max-width: 1200px;
    margin: 0 auto;
}<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gerador de senha</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <img src="unlock.svg" alt="cadeado fechado">
    <h2 class="titulo-principal">Gerador de senhas</h2>
    <h3 class="titulo-secundario">Gere instantaneamente uma senha aleatória e segura</h3>
</body>
</html><!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gerador de senha</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <img src="unlock.svg" alt="cadeado fechado">
    <h2 class="titulo-principal">Gerador de senhas</h2>
    <h3 class="titulo-secundario">Gere instantaneamente uma senha aleatória e segura</h3>
</body>
</html>

.parametro{
    background-color: var(--fundo-texto);
    border: 2px solid var(--borda);
    margin-top: 32px;
    padding: 24px;
}

.parametro-titulo{
    font-family: var(--roboto-mono);
    font-size: 28px;
}

.parametro-senha__titulo{
    font-size:24px;
}

.parametro-coluna__senha{
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.parametro-senha{
    width: 50%;
    margin: 0 auto;
}

.parametro-senha-botoes{
    display: flex;
    justify-content: center;
}

.parametro-senha__botao{
    background-color: var(--fundo-texto);
    color: var(--branco);
    border: 2px solid var(--borda);
    padding: 24px;
    font-size: 24px;
    cursor: pointer;
}
.parametro-senha__texto{
    padding: 24px;
    border-top: 2px solid var(--borda);
    border-bottom: 2px solid var(--borda);
    margin: 0;
    font-size: 24px;
}

label{
    font-size: 20px;
}

.checkbox{
    width: 20px;
    height: 20px;
    cursor: pointer;
}

.barra{
    background-color: var(--fundo-senha);
    height: 30px;
    width: 100%;
}
.forca{
    height: 30px;
    position: relative;
    bottom: 30px;
}
.fraca{
    width: 25%;
    background-color: #E71B32; 
}
.media{
    background-color: #FAF408;
    width: 50%;
}
.forte{
    background-color: #00FF85;
    width: 100%;
}

.parametro-senha-textos{
    display: flex;
    justify-content: space-between;
}


@media screen and (min-width: 768px) {
    .parametro-coluna__senha{
        flex-direction: row;
    }
}
