function alunoBanco(conexao){
	this._conexao = conexao;
}

alunoBanco.prototype.cadastra = function(dados,callback){
	this._conexao.query('insert into aluno set ?',dados, callback);
}

alunoBanco.prototype.buscaGeral = function(callback){
	this._conexao.query('select * from aluno',callback);
}

alunoBanco.prototype.busca=function(id,callback){
	this._conexao.query('select*from aluno where rm_aluno=?',id, callback);
}

alunoBanco.prototype.busca2= function(rm_aluno,callback){
	this._conexao.query('select * from aluno where rm_aluno like ?',rm_aluno,callback);
}

alunoBanco.prototype.editar=function(dados,callback){
	this._conexao.query('UPDATE aluno SET senha_aluno=? WHERE rm_aluno=?',[dados,dados.rm_aluno],callback);
}

alunoBanco.prototype.editardados=function(dados,callback){
	this._conexao.query('UPDATE aluno SET ? WHERE rm_aluno=?',[dados,dados.rm_aluno],callback);
}

alunoBanco.prototype.deletar = function(id,callback){
	this._conexao.query('DELETE FROM aluno WHERE rm_aluno = ?',id,callback);
}

alunoBanco.prototype.login = function(dados,callback){
	this._conexao.query('SELECT * FROM aluno WHERE rm_aluno = ? and senha_aluno=?',[dados.rm_aluno, dados.senha_aluno],callback);
}

module.exports = function(){
	return alunoBanco;
}