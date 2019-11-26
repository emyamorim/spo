function usuarioBanco(conexao) {
  this._conexao = conexao;
}

usuarioBanco.prototype.salva = function(dados, callback) {
  this._conexao.query('insert into usuario set ?', dados, callback);
};

usuarioBanco.prototype.buscaGeral = function(callback) {
  this._conexao.query('select * from usuario', callback);
};

usuarioBanco.prototype.busca = function(id, callback) {
  this._conexao.query('select*from usuario where idusuario=?', id, callback);
};

usuarioBanco.prototype.editar = function(dados, callback) {
  this._conexao.query(
    'UPDATE usuario SET ? WHERE idusuario=?',
    [dados, dados.idusuario],
    callback
  );
};

usuarioBanco.prototype.deletar = function(id, callback) {
  this._conexao.query('DELETE FROM usuario WHERE idusuario = ?', id, callback);
};

module.exports = function() {
  return usuarioBanco;
};
