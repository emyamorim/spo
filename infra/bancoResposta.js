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

bancoResposta.prototype.listarMencoesProvas = function(nome_serie, callback) {
  return this._conexao.query(
    `SELECT a.rm_aluno, CONCAT(a.nome_aluno, ' ', a.sobrenome_aluno) AS 'nome',
    turma_aluno, r.titulo_prova, r.mencao_aluno FROM spo.resposta r
    INNER JOIN spo.aluno a ON r.rm_aluno = a.rm_aluno
    WHERE a.serie_aluno = ?`,
    nome_serie,
    callback
  );
};

module.exports = function() {
  return bancoResposta;
};
