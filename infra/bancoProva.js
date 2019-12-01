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

bancoProva.prototype.listarProvaAlunoPorId = function(rm_aluno, callback) {
  console.log(rm_aluno);

  this._conexao.query(
    `SELECT *
      FROM prova p
      JOIN aluno a ON a.turma_aluno = p.turma
     WHERE a.rm_aluno = ? AND a.serie_aluno = p.serie`,
    rm_aluno,
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
