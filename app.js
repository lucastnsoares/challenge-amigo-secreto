let listaDeAmigos = [];
let temNomesNaLista = false;

function adicionarAmigo() {
    let nomeInformado = document.querySelector('input').value;
    if (nomeInformado == '') {
        alert('Por favor, insira um nome válido.');
    } else {
        let exibicaoResultado = document.getElementById('resultado');
        exibicaoResultado.innerHTML = '';
        listaDeAmigos.push(nomeInformado);
        let exibicaoLista = document.getElementById('listaAmigos');
        exibicaoLista.innerHTML = '';
       criaExibicaoLista();
    }
    let campoNomeInformado = document.querySelector('input');
    campoNomeInformado.value = '';
}

function criaExibicaoLista() {
    let exibicaoLista = document.getElementById('listaAmigos');
    exibicaoLista.innerHTML = '';
    listaDeAmigos.forEach((itemListaDeAmigos, index) => {
        elementoLi = document.createElement('li');
        let texto = document.createTextNode(itemListaDeAmigos);
        if (listaDeAmigos.length > 0 && temNomesNaLista == false) {
            criaBotoes('button', 'button-trash', excluirTodosItemsDaLista, 'Excluir todos os nomes', 'Excluir todos os nomes', 'Ícone para excluir todos os nomes' ,document.getElementById('botoes'));
            criaBotoes('button', 'button-draw', sortearAmigo, 'Sortear amigo secreto', 'Sortear amigo secreto','Ícone para sortear o amigo secreto', document.getElementById('botoes'));
            temNomesNaLista = true;
        }
        let elementoImg = document.createElement('img');
        elementoImg.src = 'assets/trash.png';
        elementoImg.width = 40;
        elementoImg.onclick = () => excluirItemDaLista(index);
        elementoImg.className = 'button-trash-item';
        elementoLi.appendChild(texto);
        elementoLi.appendChild(elementoImg);
        exibicaoLista.appendChild(elementoLi);
    })
}

function sortearAmigo() {
    let tamanhoListaDeAmigos = listaDeAmigos.length;
    let contadorSorteio = parseInt(Math.random() * tamanhoListaDeAmigos);
    nomeSorteado = listaDeAmigos[contadorSorteio];
    let texto = `O amigo secreto sorteado foi: ${nomeSorteado}`;
    let exibeSorteado = document.getElementById('resultado');
    exibeSorteado.innerHTML = texto;
}

function criaBotoes(tipoElemento, classe, funcao, ariaLabel, textoBotao, alt, elementoPai) {
    let elementoButton = document.createElement(tipoElemento);
    elementoButton.className = classe;
    elementoButton.onclick = funcao;
    elementoButton.ariaLabel = ariaLabel;
    elementoButton.alt = alt;
    if (funcao == excluirTodosItemsDaLista) {
        let elementoImg = document.createElement('img');
        elementoImg.width = 40;
        elementoImg.src = 'assets/trash.png';
        elementoButton.appendChild(elementoImg);
    } else {
        let elementoImg = document.createElement('img');
        elementoImg.width = 40;
        elementoImg.src = 'assets/play_circle_outline.png';
        elementoButton.appendChild(elementoImg);
    }
    elementoButton.appendChild(document.createTextNode(textoBotao));
    elementoPai.appendChild(elementoButton);
}

function excluirBotoes(id) {
    let btn = document.getElementById(id);
    btn.innerHTML = '';
}

function excluirTodosItemsDaLista() {
    listaDeAmigos = [];
    temNomesNaLista = false;
    excluirBotoes('botoes');
    let exibicaoLista = document.getElementById('listaAmigos');
    exibicaoLista.innerHTML = '';
    let exibicaoResultado = document.getElementById('resultado');
    exibicaoResultado.innerHTML = '';
}

function excluirItemDaLista(index) {
    listaDeAmigos.splice(index, 1);
    if (listaDeAmigos.length == 0) {
       excluirBotoes('botoes');
       temNomesNaLista = false;
    }
    let exibicaoLista = document.getElementById('listaAmigos');
    exibicaoLista.innerHTML = '';
    criaExibicaoLista();
    let exibicaoResultado = document.getElementById('resultado');
    exibicaoResultado.innerHTML = '';
}