module.exports = function(app) {
  app.get('/', function(req, res) {
    res.render('login_aluno.ejs');
  });

  //*************** QUESTÕES **************************//

  // CADASTRAR //
  app.get('/cadastrarquestoes', function(req, res) {
    res.render('cadastro_questao.ejs');
  });

  app.post('/cadastrarquestoes', function(req, res) {
    var dados = req.body;
    var conexao = app.infra.conexao();
    var questoesBanco = new app.infra.bancoQuestoes(conexao);
    questoesBanco.cadastra(dados, function(erro, resposta) {
      if (erro) {
        console.log(erro);
      } else {
        res.render('sucessocadastroquestao.ejs');
      }
    });
    console.log(dados);
  });

  //LISTAR//
  app.get('/listarQuestoes', function(req, res) {
    var conexao = app.infra.conexao();
    var questoesBanco = new app.infra.bancoQuestoes(conexao);
    questoesBanco.buscaGeral(function(erro, resposta) {
      if (erro) {
        console.log(erro);
      } else {
        res.render('listar_questoes.ejs', { busca: resposta });
      }
    });
  });

  //DELETAR//
  app.get('/deletarQuestoes/:id', function(req, res) {
    var id = req.params.id;
    var conexao = app.infra.conexao();
    var questoesBanco = new app.infra.bancoQuestoes(conexao);
    questoesBanco.deletar(id, function(erro, resposta) {
      if (erro) {
        console.log(erro);
      } else {
        res.redirect('/listarQuestoes');
      }
    });
  });

  //EDITAR//
  app.get('/buscaEditar/:id_questoes', function(req, res) {
    var id_questoes = req.params.id_questoes;
    var conexao = app.infra.conexao();
    var questoesBanco = new app.infra.bancoQuestoes(conexao);
    questoesBanco.busca(id_questoes, function(erro, resposta) {
      if (erro) {
        console.log(erro);
      } else {
        res.render('alterar_questoes.ejs', { busca: resposta });
      }
    });
  });

  app.post('/editarQuestoes', function(req, res) {
    var dados = req.body;
    var conexao = app.infra.conexao();
    var questoesBanco = new app.infra.bancoQuestoes(conexao);
    questoesBanco.editar(dados, function(erro, resposta) {
      if (erro) {
        console.log(erro);
      } else {
        res.render('sucessoeditarquestao.ejs');
      }
    });
  });

  //***************** ALUNO **************************//

  //CADASTRAR//
  app.get('/cadastraraluno', function(req, res) {
    res.render('login_aluno.ejs');
  });

  app.post('/cadastraraluno', function(req, res) {
    var dados = req.body;
    var conexao = app.infra.conexao();
    var alunoBanco = new app.infra.bancoAluno(conexao);
    alunoBanco.cadastra(dados, function(erro, resposta) {
      if (erro) {
        console.log(erro);
      } else {
        res.render('sucessocadastroaluno.ejs');
      }
    });
    console.log(dados);
  });

  //EDITAR SENHA//
  app.get('/editarSenhaAluno', function(req, res) {
    res.render('/login_aluno.ejs');
  });

  app.post('/editarSenhaAluno', function(req, res) {
    var dados = req.body;
    var conexao = app.infra.conexao();
    var alunoBanco = new app.infra.bancoAluno(conexao);
    alunoBanco.editar(dados, function(erro, resposta) {
      if (erro) {
        console.log(erro);
      } else {
        res.render('sucessoeditarsenhaaluno.ejs');
      }
    });
  });
  //EDITAR//
  app.get('/buscaEditarAluno/:rm_aluno', function(req, res) {
    var rm_aluno = req.params.rm_aluno;
    var conexao = app.infra.conexao();
    var alunoBanco = new app.infra.bancoAluno(conexao);
    alunoBanco.busca(rm_aluno, function(erro, resposta) {
      if (erro) {
        console.log(erro);
      } else {
        res.render('alterar_aluno.ejs', { busca: resposta });
      }
    });
  });

  app.post('/editarAluno', function(req, res) {
    var dados = req.body;
    var conexao = app.infra.conexao();
    var alunoBanco = new app.infra.bancoAluno(conexao);
    alunoBanco.editardados(dados, function(erro, resposta) {
      if (erro) {
        console.log(erro);
      } else {
        res.render('sucessoeditaraluno.ejs');
      }
    });
  });

  //LISTAR//
  app.get('/listarAluno', function(req, res) {
    var conexao = app.infra.conexao();
    var alunoBanco = new app.infra.bancoAluno(conexao);
    alunoBanco.buscaGeral(function(erro, resposta) {
      if (erro) {
        console.log(erro);
      } else {
        res.render('listar_aluno.ejs', { busca: resposta });
      }
    });
  });

  //DELETAR//
  app.get('/deletarAluno/:id', function(req, res) {
    var id = req.params.id;
    var conexao = app.infra.conexao();
    var alunoBanco = new app.infra.bancoAluno(conexao);
    alunoBanco.deletar(id, function(erro, resposta) {
      if (erro) {
        console.log(erro);
      } else {
        res.redirect('/listarAluno');
      }
    });
  });

  //LOGAR//
  app.get('/logarAluno', function(req, res) {
    res.render('login_aluno.ejs');
  });

  app.post('/logarAluno', function(req, res) {
    var sessao = req.session;
    var conexao = app.infra.conexao();
    var alunoBanco = new app.infra.bancoAluno(conexao);
    var dados = req.body;
    console.log(dados);
    if (dados.rm_aluno && dados.senha_aluno) {
      alunoBanco.login(dados, function(erro, resposta) {
        if (erro) {
          console.log(erro);
          res.render('validaraluno.ejs');
        } else {
          console.log(resposta);
          if (resposta.length) {
            sessao.logado = 1;
            res.render('index_aluno.ejs', { logado: sessao.logado });
          } else {
            res.render('validaraluno.ejs');
          }
        }
      });
    } else {
      res.send('Insira sua senha');
      res.end();
    }
  });

  //**************** PROFESSOR *****************//

  //CADASTRAR//
  app.get('/cadastrarprofessor', function(req, res) {
    res.render('cadastro_professor.ejs');
  });

  app.post('/cadastrarprofessor', function(req, res) {
    var dados = req.body;
    var conexao = app.infra.conexao();
    var professorBanco = new app.infra.bancoProfessor(conexao);
    professorBanco.cadastra(dados, function(erro, resposta) {
      if (erro) {
        console.log(erro);
      } else {
        res.render('sucessocadastroprofessor.ejs');
      }
    });
    console.log(dados);
  });

  //EDITAR SENHA//
  app.get('/editarSenhaProf', function(req, res) {
    res.render('/login_professor.ejs');
  });

  app.post('/editarSenhaProf', function(req, res) {
    var dados = req.body;
    var conexao = app.infra.conexao();
    var professorBanco = new app.infra.bancoProfessor(conexao);
    professorBanco.editar(dados, function(erro, resposta) {
      if (erro) {
        console.log(erro);
      } else {
        res.render('sucessoeditarsenhaprof.ejs');
      }
    });
  });

  //EDITAR//
  app.get('/buscaEditarProfessor/:rm_professor', function(req, res) {
    var rm_professor = req.params.rm_professor;
    var conexao = app.infra.conexao();
    var professorBanco = new app.infra.bancoProfessor(conexao);
    professorBanco.busca(rm_professor, function(erro, resposta) {
      if (erro) {
        console.log(erro);
      } else {
        res.render('alterar_professor.ejs', { busca: resposta });
      }
    });
  });

  app.post('/editarProfessor', function(req, res) {
    var dados = req.body;
    var conexao = app.infra.conexao();
    var professorBanco = new app.infra.bancoProfessor(conexao);
    professorBanco.editardados(dados, function(erro, resposta) {
      if (erro) {
        console.log(erro);
      } else {
        res.render('sucessoeditarprofessor.ejs');
      }
    });
  });

  //LISTAR//
  app.get('/listarProfessor', function(req, res) {
    var conexao = app.infra.conexao();
    var professorBanco = new app.infra.bancoProfessor(conexao);
    professorBanco.buscaGeral(function(erro, resposta) {
      if (erro) {
        console.log(erro);
      } else {
        res.render('listar_professor.ejs', { busca: resposta });
      }
    });
  });

  //DELETAR//
  app.get('/deletarProfessor/:id', function(req, res) {
    var id = req.params.id;
    var conexao = app.infra.conexao();
    var professorBanco = new app.infra.bancoProfessor(conexao);
    professorBanco.deletar(id, function(erro, resposta) {
      if (erro) {
        console.log(erro);
      } else {
        res.redirect('/listarProfessor');
      }
    });
  });

  //LOGAR//
  app.get('/logarProfessor', function(req, res) {
    res.render('login_professor.ejs');
  });

  app.post('/logarProfessor', function(req, res) {
    var sessao = req.session;
    var conexao = app.infra.conexao();
    var professorBanco = new app.infra.bancoProfessor(conexao);
    var dados = req.body;
    console.log(dados);

    if (dados.rm_professor && dados.senha_prof) {
      professorBanco.login(dados, function(erro, resposta) {
        if (erro) {
          console.log(erro);
        } else {
          console.log(resposta);

          if (resposta.length > 0) {
            sessao.logado = 1;
            res.render('index_prof.ejs', {
              logado: sessao.logado,
              rm_professor: resposta[0].rm_professor
            });
          } else {
            res.render('validarprof.ejs');
          }
        }
      });
    } else {
      res.send('Insira sua senha');
      res.end();
    }
  });

  //******************** ADM *********************//
  app.get('/logar', function(req, res) {
    res.render('login_adm.ejs');
  });

  app.post('/logar', function(req, res) {
    var sessao = req.session;
    var conexao = app.infra.conexao();
    var admBanco = new app.infra.bancoAdm(conexao);
    var dados = req.body;

    if (dados.login && dados.senha) {
      admBanco.login(dados, function(erro, resposta) {
        if (erro) {
          console.log(erro);
        } else {
          if (resposta.length) {
            sessao.logado = 1;
            res.render('adm_index.ejs', { logado: sessao.logado });
          } else {
            res.render('validaradm.ejs');
          }
        }
      });
    } else {
      response.send('Insira sua senha');
      response.end();
    }
  });

  //REDIRECIONAMENTO//
  app.get('/indexProf', function(req, res) {
    res.render('index_prof.ejs');
  });

  app.get('/indexAdm', function(req, res) {
    res.render('adm_index.ejs');
  });
  
  app.get('/listarProva', function(req, res) {
    res.render('listar_prova.ejs');
  });
 app.get('/provaAluno', function(req, res) {
    res.render('prova_aluno.ejs');
  });
 app.get('/gerarMencao', function(req, res) {
    res.render('gerarMencao.ejs');
  });


  //1 ano//
 app.get('/mencoes1anoa', function(req, res) {
    res.render('mençoes1anoa.ejs');
  });
  app.get('/escolherturma1anob', function(req, res) {
    res.render('escolherturma1anob.ejs');
  });
  app.get('/escolherturma1log', function(req, res) {
    res.render('escolherturma1log.ejs');
  });
  // 2 ano //
  app.get('/escolherturma2anoa', function(req, res) {
    res.render('escolherturma2anoa.ejs');
  });
  app.get('/escolherturma2anob', function(req, res) {
    res.render('escolherturma2anob.ejs');
  });
  app.get('/escolherturma2log', function(req, res) {
    res.render('escolherturma2log.ejs');
  });
  // 3 ano //
  app.get('/escolherturma3anoa', function(req, res) {
    res.render('escolherturma3anoa.ejs');
  });
  app.get('/escolherturma3anob', function(req, res) {
    res.render('escolherturma3anob.ejs');
  });
  app.get('/escolherturma3log', function(req, res) {
    res.render('escolherturma3log.ejs');
  });



  // CADASTRO PROVA //
  app.get('/cadastroprova', function(req, res) {
    var conexao = app.infra.conexao();
    var questoesBanco = new app.infra.bancoQuestoes(conexao);

    questoesBanco.buscaGeral(function(erro, resposta) {
      if (erro) {
        console.log(erro);
      } else {
        console.warn(resposta);
        res.render('cadastro_prova.ejs', { busca: resposta });
      }
    });
  });

  app.post('/cadastroprova', function(req, res) {
    var dados = req.body;

    var callback = function(erro, resposta) {
      if (erro) {
        console.log(erro);
      } else {
        res.render('sucessocadastroprova.ejs');
      }
    };

    if (!dados.questao_descricao) {
      console.warn('Selecione pelo menos uma questão ou mais!');
    }

    var bancoProva = new app.infra.bancoProva(app.infra.conexao());

    if (Array.isArray(dados.questao_descricao)) {
      dados.questao_descricao = `"${dados.questao_descricao}"`;
    }

    bancoProva.salvar(dados, callback);

    console.log(dados);
    return;
  });
};
