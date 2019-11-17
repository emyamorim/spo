function admBanco(conexao){
	this._conexao = conexao;
}

admBanco.prototype.login = function(dados,callback){
	this._conexao.query('SELECT * FROM adm WHERE login = ? and senha=?',[dados.login, dados.senha],callback);
}

module.exports = function(){
	return admBanco;
}