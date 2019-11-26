function bancoProva(conexao) {
  this._conexao = conexao;
}

bancoProva.prototype.salvar = function(dados, callback) {
  this._conexao.query('insert into spo.prova set ?', dados, callback);
};

module.exports = function() {
  return bancoProva;
};
