var database = require('../database/config')

function count() {
  console.log(
    "ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()"
  )
  var instrucao = `
        SELECT nomeUsuario as nome, count(fkPersonagem) as voto, nomePersonagem as personagem
         FROM tbUsuario
         join tbPersonagem on idPersonagem = fkPersonagem
         group by tbPersonagem.nomePersonagem;
    `
  console.log('Executando a instrução SQL: \n' + instrucao)
  return database.executar(instrucao)
}

function entrar(email, senha) {
  console.log(
    "ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ",
    email,
    senha
  )
  var instrucao = `
        SELECT idUsuario as 'usuario',nomePersonagem as 'Personagem', nomeUsuario as 'nome', emailUsuario as 'email' FROM tbUsuario 
        join tbPersonagem on fkPersonagem = idPersonagem
        WHERE emailUsuario = '${email}' AND senhaUsuario = '${senha}';
    `
  console.log('Executando a instrução SQL: \n' + instrucao)
  return database.executar(instrucao)
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function cadastrar(nome, email, senha, personagem) {
  console.log(
    "ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():",

    nome,
    email,
    senha,
    personagem
  )

  // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
  //  e na ordem de inserção dos dados.
  var instrucao = `
        INSERT INTO tbUsuario (nomeUsuario, emailUsuario, senhaUsuario, fkPersonagem) VALUES ('${nome}',  '${email}', '${senha}', '${personagem}');
    `
  console.log('Executando a instrução SQL: \n' + instrucao)
  return database.executar(instrucao)
}

module.exports = {
  entrar,
  cadastrar,
  count
}
