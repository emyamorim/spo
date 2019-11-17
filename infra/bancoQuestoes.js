function questoesBanco(conexao) {
  this._conexao = conexao;
}

questoesBanco.prototype.cadastra = function(dados, callback) {
  this._conexao.query('insert into questoes set ?', dados, callback);
};

questoesBanco.prototype.buscaGeral = function(callback) {
  this._conexao.query('select * from questoes', callback);
};

questoesBanco.prototype.busca = function(id_questoes, callback) {
  this._conexao.query(
    'select * from questoes where id_questoes=?',
    id_questoes,
    callback
  );
};

questoesBanco.prototype.editar = function(dados, callback) {
  this._conexao.query(
    'UPDATE questoes SET ? WHERE id_questoes=?',
    [dados, dados.id_questoes],
    callback
  );
};

questoesBanco.prototype.deletar = function(id, callback) {
  this._conexao.query(
    'DELETE FROM questoes where id_questoes = ?',
    id,
    callback
  );
};

module.exports = function() {
  return questoesBanco;
};
