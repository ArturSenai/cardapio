let btnAdicionar = document.getElementById("btn");
let inputComida = document.getElementById("comida");
let selectDia = document.getElementById("select");

let segunda = [];
let terca = [];
let quarta = [];
let quinta = [];
let sexta = [];
let sabado = [];
let domingo = [];

let posicao = 0;

btnAdicionar.onclick = function () {
    let comidaNome = inputComida.value;
    let diaSelecionado = selectDia.value;
    let tabela = document.querySelector("#table tbody") 

    if (comidaNome === "") {
        alert("Por favor, insira um nome de comida.");
        return;
    }

    switch (diaSelecionado) {
        case "segunda":
            segunda.push(comidaNome); //ADICIONAR AO ARRAY
            posicao = segunda.length; //RETORNAR A POSIÇÃO DO ARRAY
            break;
        case "terca":
            terca.push(comidaNome); //ADICIONAR AO ARRAY
            posicao = terca.length; //RETORNAR A POSIÇÃO DO ARRAY
            break;
        case "quarta":
            quarta.push(comidaNome); //ADICIONAR AO ARRAY
            posicao = quarta.length; //RETORNAR A POSIÇÃO DO ARRAY
            break;
        case "quinta":
            quinta.push(comidaNome); //ADICIONAR AO ARRAY
            posicao = quinta.length; //RETORNAR A POSIÇÃO DO ARRAY
            break;
        case "sexta":
            sexta.push(comidaNome); //ADICIONAR AO ARRAY
            posicao = sexta.length; //RETORNAR A POSIÇÃO DO ARRAY
            break;
        case "sabado":
            sabado.push(comidaNome); //ADICIONAR AO ARRAY
            posicao = sabado.length; //RETORNAR A POSIÇÃO DO ARRAY
            break;
        case "domingo":
            domingo.push(comidaNome); //ADICIONAR AO ARRAY
            posicao = domingo.length; //RETORNAR A POSIÇÃO DO ARRAY
            break;
        default:
            alert("Dia da semana inválido");
    }


    // Limpar o campo de entrada
    inputComida.value = "";

    //Pegar dados da linha
    linhaHtml = document.getElementById("linha"+posicao);

    arrayNum = posicao - 1; //POSIÇÃO DO ARRAY(ARRAY INICIA NO 0)

    // Adicionar o nome da comida abaixo do dia da semana selecionado
    linha = "<tr id='linha"+posicao+"'>";
    linha += "   <td>";
    linha +=        segunda[arrayNum] ?? '' != '' ? "<button class='btnAlterar' dia='segunda' posicao='"+posicao+"'>Alterar</button> "+segunda[arrayNum]+" <button class='btnDeletar' dia='segunda' posicao='"+posicao+"'>Deletar</button>" : "";
    linha += "  </td>"
    linha += "   <td>";
    linha +=        terca[arrayNum] ?? '' != '' ? "<button class='btnAlterar' dia='terca' posicao='"+posicao+"'>Alterar</button> "+terca[arrayNum]+" <button class='btnDeletar' dia='terca' posicao='"+posicao+"'>Deletar</button>" : "";
    linha += "  </td>"
    linha += "   <td>";
    linha +=        quarta[arrayNum] ?? '' != '' ? "<button class='btnAlterar' dia='quarta' posicao='"+posicao+"'>Alterar</button> "+quarta[arrayNum]+" <button class='btnDeletar' dia='quarta' posicao='"+posicao+"'>Deletar</button>" : "";
    linha += "  </td>"
    linha += "   <td>";
    linha +=        quinta[arrayNum] ?? '' != '' ? "<button class='btnAlterar' dia='quinta' posicao='"+posicao+"'>Alterar</button> "+quinta[arrayNum]+" <button class='btnDeletar' dia='quinta' posicao='"+posicao+"'>Deletar</button>" : "";
    linha += "  </td>"
    linha += "   <td>";
    linha +=        sexta[arrayNum] ?? '' != '' ? "<button class='btnAlterar' dia='sexta' posicao='"+posicao+"'>Alterar</button> "+sexta[arrayNum]+" <button class='btnDeletar' dia='sexta' posicao='"+posicao+"'>Deletar</button>" : "";
    linha += "  </td>"
    linha += "   <td>";
    linha +=        sabado[arrayNum] ?? '' != '' ? "<button class='btnAlterar' dia='sabado' posicao='"+posicao+"'>Alterar</button> "+sabado[arrayNum]+" <button class='btnDeletar' dia='sabado' posicao='"+posicao+"'>Deletar</button>" : "";
    linha += "  </td>"
    linha += "   <td>";
    linha +=        domingo[arrayNum] ?? '' != '' ? "<button class='btnAlterar' dia='domingo' posicao='"+posicao+"'>Alterar</button> "+domingo[arrayNum]+" <button class='btnDeletar' dia='domingo' posicao='"+posicao+"'>Deletar</button>" : "";
    linha += "  </td>"
    linha += "</tr>"

    if(tabela == null){
        tabela.innerHTML = linha
    }else{
        linhaHtml != null ? linhaHtml.outerHTML = linha : tabela.innerHTML += linha;
    }
}

// Adicione um ouvinte de eventos para os botões "Deletar"
document.addEventListener('click', function (event) {
    if (event.target.classList.contains('btnDeletar')) {
        // Obtenha o botão "Deletar" clicado
        const botaoDeletar = event.target;

        // Obtenha a célula (td) que contém o nome da comida e os botões
        const celula = botaoDeletar.closest('td');

        // Remova o conteúdo da célula
        if (celula) {
            celula.innerHTML = ''; // Define o conteúdo como vazio

            // Obtenha o dia e a posição dos atributos do botão
            const dia = botaoDeletar.getAttribute('dia');
            const posicao = parseInt(botaoDeletar.getAttribute('posicao'));

            // Determine o array com base no dia selecionado
            let diaArray;
            switch (dia) {
                case 'segunda':
                    diaArray = segunda;
                    break;
                case 'terca':
                    diaArray = terca;
                    break;
                case 'quarta':
                    diaArray = quarta;
                    break;
                case 'quinta':
                    diaArray = quinta;
                    break;
                case 'sexta':
                    diaArray = sexta;
                    break;
                case 'sabado':
                    diaArray = sabado;
                    break;
                case 'domingo':
                    diaArray = domingo;
                    break;
                default:
                    alert("Dia da semana inválido");
                    return;
            }

            // Remova o alimento do array
            if (posicao <= diaArray.length) {
                diaArray.splice(posicao - 1, 1);
            }
        }
    }
});



document.querySelector("#table tbody").addEventListener('click', function (event) {
    if (event.target.classList.contains('btnAlterar')) {
        // Obtenha o elemento pai (td) do botão "Alterar" clicado
        let td = event.target.parentElement;

        // Obtenha o dia da semana (atributo 'dia') e a posição (atributo 'posicao')
        let dia = event.target.getAttribute('dia');
        let posicao = event.target.getAttribute('posicao');

        // Pergunte ao usuário pelo novo nome da comida
        let novoNome = prompt('Digite o novo nome da comida:', td.textContent.trim());

        // Verifique se o usuário cancelou a entrada ou deixou em branco
        if (novoNome === null || novoNome === '') {
            return; // Saia da função se o usuário cancelou ou não forneceu um nome
        }

        // Atualize o nome da comida no array correspondente
        window[dia][posicao - 1] = novoNome;

        // Atualize o texto da célula da tabela com o novo nome
        td.innerHTML = "<button class='btnAlterar' dia= '" + dia + "' posicao="+posicao+"'>Alterar</button> "+novoNome+" <button class='btnDeletar' dia='sexta' posicao='"+posicao+"'>Deletar</button>"
    }
});