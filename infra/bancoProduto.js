function produtoBanco(conexao) {
  this._conexao = conexao;
}

produtoBanco.prototype.salva = function(dados, callback) {
  this._conexao.query('insert into produtos set ?', dados, callback);
};

produtoBanco.prototype.buscaGeral = function(callback) {
  this._conexao.query('select * from produtos', callback);
};

produtoBanco.prototype.busca = function(id, callback) {
  this._conexao.query(
    'select * from produtos where idprodutos=?',
    id,
    callback
  );
};

produtoBanco.prototype.editar = function(dados, callback) {
  this._conexao.query(
    'UPDATE produtos SET ? WHERE idprodutos=?',
    [dados, dados.idprodutos],
    callback
  );
};

produtoBanco.prototype.deletar = function(id, callback) {
  this._conexao.query(
    'DELETE FROM produtos WHERE idprodutos = ?',
    id,
    callback
  );
};

module.exports = function() {
  return produtoBanco;
};
