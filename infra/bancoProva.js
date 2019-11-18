function bancoProva(conexao) {
  this._conexao = conexao;
}

bancoProva.prototype.salvar = function(dados) {
  dados.questao_descricao = `"${dados.questao_descricao}"`;
  this._conexao.query('insert into spo.prova set ?' + dados);
};

module.exports = function() {
  return bancoProva;
};
