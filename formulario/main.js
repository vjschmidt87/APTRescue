document.getElementById('contactForm').addEventListener('submit', submitForm);

// Setup inicial de blocos de dados
document.getElementById("larTemporarioBlock").style.display='block';
document.getElementById("internacaoBlock").style.display='none';
document.getElementById("adocaoBlock").style.display='none';
document.getElementById("morteBlock").style.display='none';

function setRequired(cValue) {
  if(cValue == "Lar Temporário") { 
      setRequiredOnField("larTemporario", true); 
      setRequiredOnField("motivoInternacao", false); 
      setRequiredOnField("dataInternacao", false); 
      setRequiredOnField("valorInternacao", false); 
      setRequiredOnField("dataFalecimento", false); 
      setRequiredOnField("causaMorte", false); 
      setRequiredOnField("nomeAdotante", false); 
      setRequiredOnField("enderecoAdotante", false); 
      setRequiredOnField("telefoneAdotante", false); 
      setRequiredOnField("cpfAdotante", false); 
      document.getElementById("larTemporarioBlock").style.display='block';
      document.getElementById("internacaoBlock").style.display='none';
      document.getElementById("adocaoBlock").style.display='none';
      document.getElementById("morteBlock").style.display='none';
  } else if(cValue == "Internado") { 
      setRequiredOnField("larTemporario", false); 
      setRequiredOnField("motivoInternacao", true); 
      setRequiredOnField("dataInternacao", true); 
      setRequiredOnField("valorInternacao", false); 
      setRequiredOnField("dataFalecimento", false); 
      setRequiredOnField("causaMorte", false); 
      setRequiredOnField("nomeAdotante", false); 
      setRequiredOnField("enderecoAdotante", false); 
      setRequiredOnField("telefoneAdotante", false); 
      setRequiredOnField("cpfAdotante", false); 
      document.getElementById("larTemporarioBlock").style.display='block';
      document.getElementById("internacaoBlock").style.display='block';
      document.getElementById("adocaoBlock").style.display='none';
      document.getElementById("morteBlock").style.display='none';
  } else if(cValue == "Adotado") { 
      setRequiredOnField("larTemporario", false); 
      setRequiredOnField("motivoInternacao", false); 
      setRequiredOnField("dataInternacao", false); 
      setRequiredOnField("valorInternacao", false); 
      setRequiredOnField("dataFalecimento", false); 
      setRequiredOnField("causaMorte", false); 
      setRequiredOnField("nomeAdotante", true); 
      setRequiredOnField("enderecoAdotante", true); 
      setRequiredOnField("telefoneAdotante", true); 
      setRequiredOnField("cpfAdotante", true); 
      document.getElementById("larTemporarioBlock").style.display='block';
      document.getElementById("internacaoBlock").style.display='none';
      document.getElementById("adocaoBlock").style.display='block';
      document.getElementById("morteBlock").style.display='none';
  } else { 
      setRequiredOnField("larTemporario", false); 
      setRequiredOnField("motivoInternacao", false); 
      setRequiredOnField("dataInternacao", false); 
      setRequiredOnField("valorInternacao", false); 
      setRequiredOnField("dataFalecimento", true); 
      setRequiredOnField("causaMorte", true); 
      setRequiredOnField("nomeAdotante", false); 
      setRequiredOnField("enderecoAdotante", false); 
      setRequiredOnField("telefoneAdotante", false); 
      setRequiredOnField("cpfAdotante", false); 
      document.getElementById("larTemporarioBlock").style.display='block';
      document.getElementById("internacaoBlock").style.display='none';
      document.getElementById("adocaoBlock").style.display='none';
      document.getElementById("morteBlock").style.display='block';
  }
}

function setRequiredOnField(id, condition){
    document.getElementById(id).required = condition;
}

// Submit form
function submitForm(e){
  e.preventDefault();
  // Get values
  var nome = getInputVal('nome');
  var foto = getInputVal('linkFoto');
  var especie = document.querySelector('input[name="especie"]:checked').value;
  var sexo = document.querySelector('input[name="sexo"]:checked').value;
  var enderecoResgate = getInputVal('enderecoResgate');
  var voluntarioResgate = getInputVal('voluntarioResgate');
  var dataResgate = getInputVal('dataResgate');
  var castrado = document.getElementById('castrado').checked;
  var vacinado = document.getElementById('vacinado').checked;
  var status = document.querySelector('input[name="status"]:checked').value;
  var larTemporario = getInputVal('larTemporario');
  var motivoInternacao = getInputVal('motivoInternacao');
  var dataInternacao = getInputVal('dataInternacao');
  var valorInternacao = getInputVal('valorInternacao');
  var dataFalecimento = getInputVal("dataFalecimento"); 
  var causaMorte = getInputVal('causaMorte');
  var ul = document.getElementById('tratamento-lista');
  var li = ul.getElementsByTagName('li');
  var listaTratamento = new Array();
  for (var i = 0; i < li.length; i++) {
    listaTratamento.push(li[i].getElementsByTagName('p')[0].innerText)
  }
  var dataAdocao = getInputVal('dataAdocao');
  var nomeAdotante = getInputVal('nomeAdotante');
  var enderecoAdotante = getInputVal('enderecoAdotante');
  var telefoneAdotante = getInputVal('telefoneAdotante');
  var cpfAdotante = getInputVal('cpfAdotante');

  // Save message
  saveMessage(nome, foto, especie, sexo, enderecoResgate, voluntarioResgate, dataResgate, castrado, vacinado, status,
    larTemporario, motivoInternacao, dataInternacao, valorInternacao, dataFalecimento, causaMorte, listaTratamento, 
    dataAdocao, nomeAdotante, enderecoAdotante, telefoneAdotante, cpfAdotante);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

function addItem(){
  var ul = document.getElementById("tratamento-lista");
  var dados = document.getElementById("dataTratamento").value + '-' + document.getElementById("dadosTratamento").value;
  var li = document.createElement("li");
  li.setAttribute('id', dados);
  li.insertAdjacentHTML('beforeend', '<p>' + dados+ '</p>');
  li.insertAdjacentHTML('beforeend', '<label onClick="removeItem(\'' + dados + '\')"><b>Excluir entrada</b></label>');
  ul.appendChild(li);
  document.getElementById("dataTratamento").value = null;
  document.getElementById("dadosTratamento").value = null;
}

function removeItem(liId){
  var ul = document.getElementById("tratamento-lista");
  var item = document.getElementById(liId);
  ul.removeChild(item);
}

// Save message to firebase
function saveMessage(nome, foto, especie, sexo, enderecoResgate, voluntarioResgate, dataResgate, castrado, vacinado, status,
  larTemporario, motivoInternacao, dataInternacao, valorInternacao, dataFalecimento, causaMorte, listaTratamento, dataAdocao, 
  nomeAdotante, enderecoAdotante, telefoneAdotante, cpfAdotante){
  var newMessageRef = messagesRef.push();
  var veterinario = status=="Internado" ? "Marildo" : "";
  newMessageRef.set({
    nome: nome,
    foto: foto,
    especie: especie,
    sexo: sexo,
    enderecoResgate: enderecoResgate,
    voluntarioResgate: voluntarioResgate,
    dataResgate: dataResgate,
    castrado: castrado,
    vacinado: vacinado,
    status: status,
    larTemporario: larTemporario,
    motivoInternacao: motivoInternacao,
    dataInternacao: dataInternacao,
    veterinario: veterinario,
    valorInternacao: valorInternacao,
    dataFalecimento: dataFalecimento,
    causaMorte: causaMorte,
    dadosTratamentos: dadosTratamentos,
    listaTratamento: listaTratamento,
    dataAdocao: dataAdocao,
    nomeAdotante: nomeAdotante,
    enderecoAdotante: enderecoAdotante,
    telefoneAdotante: telefoneAdotante,
    cpfAdotante: cpfAdotante
  });
}