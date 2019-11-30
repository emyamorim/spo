function professorBanco(conexao) {
  this._conexao = conexao;
}

professorBanco.prototype.cadastra = function(dados, callback) {
  this._conexao.query('insert into professor set ?', dados, callback);
};

professorBanco.prototype.buscaGeral = function(callback) {
  this._conexao.query('select * from professor', callback);
};

professorBanco.prototype.busca = function(id, callback) {
  this._conexao.query(
    'select * from professor where rm_professor = ?',
    id,
    callback
  );
};

professorBanco.prototype.busca2 = function(rm_professor, callback) {
  this._conexao.query(
    'select * from professor where rm_professor like ?',
    rm_professor,
    callback
  );
};

professorBanco.prototype.editar = function(dados, callback) {
  this._conexao.query(
    'UPDATE professor SET senha_prof=? WHERE rm_professor=?',
    [dados, dados.rm_professor],
    callback
  );
};

professorBanco.prototype.editardados = function(dados, callback) {
  this._conexao.query(
    'UPDATE professor SET ? WHERE rm_professor=?',
    [dados, dados.rm_professor],
    callback
  );
};

professorBanco.prototype.deletar = function(id, callback) {
  this._conexao.query(
    'DELETE FROM professor WHERE rm_professor = ?',
    id,
    callback
  );
};

professorBanco.prototype.login = function(dados, callback) {
  this._conexao.query(
    'SELECT * FROM professor WHERE rm_professor = ? and senha_prof=?',
    [dados.rm_professor, dados.senha_prof],
    callback
  );
};

module.exports = function() {
  return professorBanco;
};
