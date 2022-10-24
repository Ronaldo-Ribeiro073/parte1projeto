var variavel, index;

function cadtreino(semana, exercicio, carga, series, repeticoes, intervalo, lanche) {
    variavel = document.getElementById("tbvariavel");    
    var qtdlLinhas = variavel.rows.length;
    var linha = variavel.insertRow(qtdlLinhas);
    var linhaParam;

    var cellsemana = linha.insertCell(0);
    var cellexercicio = linha.insertCell(1);
    var cellcarga = linha.insertCell(2);
    var cellseries = linha.insertCell(3);
    var cellrepeticoes = linha.insertCell(4);
    var cellintervalo = linha.insertCell(5);
    var celllanche = linha.insertCell(6);

    cellsemana.innerHTML = semana;
    cellexercicio.innerHTML = exercicio;
    cellcarga.innerHTML = carga;
    cellseries.innerHTML = series;
    cellrepeticoes.innerHTML = repeticoes;
    cellintervalo.innerHTML = intervalo;
    celllanche.innerHTML = lanche;

    preencheCamposForm();

}

function alttreino(semana, exercicio, carga, series, repeticoes, intervalo, lanche) {

    variavel.rows[index].cells[0].innerHTML = semana;
    variavel.rows[index].cells[1].innerHTML = exercicio;
    variavel.rows[index].cells[2].innerHTML = carga;
    variavel.rows[index].cells[3].innerHTML = series;
    variavel.rows[index].cells[4].innerHTML = repeticoes;
    variavel.rows[index].cells[5].innerHTML = intervalo;
    variavel.rows[index].cells[6].innerHTML = lanche;

}

function preencheCamposForm() {

    for(var i = 0; i < variavel.rows.length; i++) 
    {
        variavel.rows[i].onclick = function() 
        {
            index = this.rowIndex;
            document.getElementById("txtordem").value = variavel.rows[index].cells[0].innerText;
            document.getElementById("txtexercicio").value = variavel.rows[index].cells[1].innerText;
            document.getElementById("txtcarga").value = variavel.rows[index].cells[2].innerText;
            document.getElementById("txtseries").value = variavel.rows[index].cells[3].innerText;
            document.getElementById("txtrepeticoes").value = variavel.rows[index].cells[4].innerText;
            document.getElementById("txtintervalo").value = variavel.rows[index].cells[5].innerText;
            document.getElementById("txtlanche3").value = variavel.rows[index].cells[6].innerText;
        }
    }
}

function apagarregistro() {

    for(var i = 0; i < variavel.rows.length; i++) 
    {
        if (index == i) {
            variavel.deleteRow(index);
            return;
        }
    }
}

/*downlaod*/

function tableToCSV() {

    // Variável para armazenar os dados csv finais
    var csv_data = [];
   
    // Obtém os dados de cada linha
    var rows = document.getElementsByTagName('tr');
    for (var i = 0; i < rows.length; i++) {
   
        // Obtém os dados de cada coluna
        var cols = rows[i].querySelectorAll('td,th');
   
        // Armazena cada dado de linha csv
        var csvrow = [];
        for (var j = 0; j < cols.length; j++) {
   
            // Obtém os dados de texto de cada célula
            // de uma linha e envia para csvrow
            csvrow.push(cols[j].innerHTML);
        }
   
        // Combina cada valor de coluna com vírgula
        csv_data.push(csvrow.join(";"));
    }
   
    // Combina os dados de cada linha com o novo caractere de linha
    csv_data = csv_data.join('\n');
   
    // Chama esta função para baixar o arquivo csv
    downloadCSVFile(csv_data);
   
   }
   
   function downloadCSVFile(csv_data) {
   
    // Cria objeto de arquivo CSV e feed
    // nosso csv_data nele
    CSVFile = new Blob(["\ufeff",csv_data], {
        type: "text/csv"
    });
   
    // Cria um link temporário para iniciar
    // processo de download
    var temp_link = document.createElement('a');
   
    //Baixa o arquivo csv
    temp_link.download = "produtos.csv";
    var url = window.URL.createObjectURL(CSVFile);
    temp_link.href = url;
   
    // Este link não deve ser exibido
    temp_link.style.display = "none";
    document.body.appendChild(temp_link);
   
    //Clique automaticamente no link para
    // aciona o download
    temp_link.click();
    document.body.removeChild(temp_link);
   }