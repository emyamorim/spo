function bancoProva(conexao) {
  this._conexao = conexao;
}

bancoProva.prototype.salvar = function(dados, callback) {
  this._conexao.query('insert into spo.prova set ?', dados, callback);
};

bancoProva.prototype.obterProvasPorRMProfessor = function(
  rm_professor,
  callback
) {
  return this._conexao.query(
    'SELECT * from spo.prova p WHERE p.rm_professor = ?',
    rm_professor,
    callback
  );
};

bancoProva.prototype.deletar = function(idProva, callback) {
  this._conexao.query(
    'DELETE FROM spo.prova p WHERE p.id_prova = ?',
    idProva,
    callback
  );
};

module.exports = function() {
  return bancoProva;
};
