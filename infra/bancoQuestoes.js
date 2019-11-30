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

questoesBanco.prototype.busca2 = function(questao, callback) {
  this._conexao.query(
    'select * from questoes where questao like ?',
    questao,
    callback
  );
};

questoesBanco.prototype.busca22 = function(questao, callback) {
  this._conexao.query(
    'select * from questoes where questao like ?',
    ['%' + questao.btnBuscar + '%'],
    callback
  );
};

questoesBanco.prototype.busca3 = function(dados, callback) {
  this._conexao.query(
    'SELECT * FROM questoes WHERE serie = ? AND disciplina = ? AND bimestre = ?',
    [dados.serie, dados.disciplina, dados.bimestre],
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
