function bancoResposta(conexao) {
  this._conexao = conexao;
}

bancoResposta.prototype.listarPorRMAluno = function(rm_aluno, callback) {
  return this._conexao.query(
    'SELECT * FROM spo.resposta WHERE rm_aluno = ?',
    rm_aluno,
    callback
  );
};

module.exports = function() {
  return bancoResposta;
};
