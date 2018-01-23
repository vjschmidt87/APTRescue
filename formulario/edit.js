var tableAnimals = document.getElementById('tabelaAnimais');
            
var databaseRef = firebase.database().ref('animais/');
//var databaseRef = FirebaseFirestore.database().ref('/users');
var rowindex = 1;

document.getElementById("edit-container").style.display='none';

databaseRef.once('value', function(snapshot) {
    snapshot.forEach(function(childSnapshot) {

        var childKey = childSnapshot.key;
        var childData = childSnapshot.val();

        var row = tableAnimals.insertRow(rowindex);
        var cellId = row.insertCell(0);
        var cellName = row.insertCell(1);
        var cellLink = row.insertCell(2);
        //cellId.appendChild(document.createTextNode(childKey));
        cellId.appendChild(document.createTextNode(childData.codigo));
        cellName.appendChild(document.createTextNode(childData.nome));
        cellLink.insertAdjacentHTML('beforeend', '<label onClick="editItem(\'' + childKey + '\')"><b>Editar entrada</b></label>');

        rowindex = rowindex + 1;

    });
});

var fbResponse = function(animalKey) {
    return new Promise(function(resolve, reject) {
        var data = {};
        var ref = databaseRef.child(animalKey);
        ref.on("child_added", snap => {
            var columnName = snap.key;
            data[columnName] = snap.val();
            if(ref != null) {
                resolve(data);
            } else {
                reject(Error("It broke"));
            }
        });
    });
}

function editItem(animalKey) {
    document.getElementById("edit-container").style.display='block';
    fbResponse(animalKey).then(function printResult(data) {
        printResultOff(data);
    });
}
    

function printResultOff(data) {
    console.log(data);
    document.getElementById('editImageContainer').innerHTML = '<img src="' + data.foto + '" width=300 />';
    document.getElementById('codigo').value = data['codigo'];
    document.getElementById('nome').value = data['nome'];
    document.getElementById('linkFoto').value = data['foto'];
    document.getElementById('contactForm').especie.value=data['especie'];
    document.getElementById('contactForm').sexo.value=data['sexo'];
    document.getElementById('enderecoResgate').value = data['enderecoResgate'];
    document.getElementById('voluntarioResgate').value = data['voluntarioResgate'];
    document.getElementById('dataResgate').value = data['dataResgate'];
    document.getElementById('observacao').value = data['observacaoResgate'];
    document.getElementById('castrado').checked = data['castrado'];
    document.getElementById('cris').checked = data['cris'];
    document.getElementById('marildo').checked = data['marildo'];
    document.getElementById("vacinacao-lista").innerHTML = "";
    var ul = document.getElementById("vacinacao-lista");
    if(data['listaVacinas'] != undefined) {
        for(var i = 0; i < data['listaVacinas'].length; i++) {
            console.log(data['listaVacinas'][i]);
            var dados = data['listaVacinas'][i].data;
            var id = data['listaVacinas'][i].data;
            var li = document.createElement("li");
            li.setAttribute('id', id);
            li.insertAdjacentHTML('beforeend', '<p>' + dados + '</p>');
            li.insertAdjacentHTML('beforeend', '<label onClick="removeItemV(\'' + id + '\')"><b>Excluir entrada</b></label>');
            ul.appendChild(li);
        }
    }
    document.getElementById('contactForm').status.value = data['status'];
    document.getElementById('larTemporario').value = data['larTemporario'];
    document.getElementById('motivoInternacao').value = data['motivoInternacao'];
    document.getElementById('dataInternacao').value = data['dataInternacao'];
    document.getElementById('valorInternacao').value = data['valorInternacao'];
    document.getElementById('dataFalecimento').value = data['dataFalecimento'];
    document.getElementById('causaMorte').value = data['causaMorte'];
    document.getElementById("tratamento-lista").innerHTML = "";
    var ul = document.getElementById("tratamento-lista");
    if(data['listaTratamento'] != undefined) {
        for(var i = 0; i < data['listaTratamento'].length; i++) {
            console.log(data['listaTratamento'][i]);
            var dados = data['listaTratamento'][i].data + ' : ' + data['listaTratamento'][i].dados;
            var id = data['listaTratamento'][i].data + ':' + data['listaTratamento'][i].dados;
            var li = document.createElement("li");
            li.setAttribute('id', id);
            li.insertAdjacentHTML('beforeend', '<p>' + dados + '</p>');
            li.insertAdjacentHTML('beforeend', '<label onClick="removeItem(\'' + id + '\')"><b>Excluir entrada</b></label>');
            ul.appendChild(li);
        }
    }
    document.getElementById('dataAdocao').value = data['dataAdocao'];
    document.getElementById('nomeAdotante').value = data['nomeAdotante'];
    document.getElementById('enderecoAdotante').value = data['enderecoAdotante'];
    document.getElementById('telefoneAdotante').value = data['telefoneAdotante'];
    document.getElementById('cpfAdotante').value = data['cpfAdotante'];

    if(data['status'] == "Lar Temporário") { 
        document.getElementById("larTemporarioBlock").style.display='block';
        document.getElementById("internacaoBlock").style.display='none';
        document.getElementById("adocaoBlock").style.display='none';
        document.getElementById("obitoBlock").style.display='none';
    } else if(data['status'] == "Internado") { 
        document.getElementById("larTemporarioBlock").style.display='block';
        document.getElementById("internacaoBlock").style.display='block';
        document.getElementById("adocaoBlock").style.display='none';
        document.getElementById("obitoBlock").style.display='none';
    } else if(data['status'] == "Adotado") { 
        document.getElementById("larTemporarioBlock").style.display='block';
        document.getElementById("internacaoBlock").style.display='none';
        document.getElementById("adocaoBlock").style.display='block';
        document.getElementById("obitoBlock").style.display='none';
    } else { 
        document.getElementById("larTemporarioBlock").style.display='block';
        document.getElementById("internacaoBlock").style.display='none';
        document.getElementById("adocaoBlock").style.display='none';
        document.getElementById("obitoBlock").style.display='block';
    }

}