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

  //FILTRO//
  app.post('/listarQuestoesf', function(req, res) {
    var questao = '%' + req.body.btnBuscar + '%';
    var conexao = app.infra.conexao();
    var questoesBanco = new app.infra.bancoQuestoes(conexao);
    questoesBanco.busca2(questao, function(erro, resposta) {
      if (erro) {
        console.log(erro);
      } else {
        console.log(resposta);
        res.render('listar_questoesf.ejs', { busca2: resposta });
      }
    });
  });

  //FILTRO-C//
  app.post('/listarQuestoesc', function(req, res) {
    var dados = req.body;
    if (
      dados.serie === '' &&
      dados.disciplina === '' &&
      dados.bimestre === ''
    ) {
      res.redirect('/listarQuestoes');
    } else {
      var conexao = app.infra.conexao();
      var questoesBanco = new app.infra.bancoQuestoes(conexao);
      questoesBanco.busca3(dados, function(erro, resposta) {
        if (erro) {
          console.log(erro);
        } else {
          console.log(resposta);
          res.render('listar_questoesc.ejs', { busca3: resposta });
        }
      });
    }
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

  //FILTRO//
  app.post('/listarAlunof', function(req, res) {
    var rm_aluno = '%' + req.body.btnBuscar + '%';
    var conexao = app.infra.conexao();
    var alunoBanco = new app.infra.bancoAluno(conexao);
    alunoBanco.busca2(rm_aluno, function(erro, resposta) {
      if (erro) {
        console.log(erro);
      } else {
        console.log(resposta);
        res.render('listar_alunof.ejs', { busca2: resposta });
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
            res.render('index_aluno.ejs', {
              logado: sessao.logado,
              rm_aluno: resposta[0].rm_aluno
            });
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

  //FILTRO//
  app.post('/listarProfessorf', function(req, res) {
    var rm_professor = '%' + req.body.btnBuscar + '%';
    var conexao = app.infra.conexao();
    var professorBanco = new app.infra.bancoProfessor(conexao);
    professorBanco.busca2(rm_professor, function(erro, resposta) {
      if (erro) {
        console.log(erro);
      } else {
        console.log(resposta);
        res.render('listar_professorf.ejs', { busca2: resposta });
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

  app.get('/indexAluno', function(req, res) {
    res.render('index_aluno.ejs');
  });

  app.get('/listarProva/:rm_professor', function(req, res) {
    var rm_professor = req.params.rm_professor;
    var conexao = app.infra.conexao();
    var bancoProva = new app.infra.bancoProva(conexao);

    var callback = function(erro, resposta) {
      if (erro) {
        console.log(erro);
      } else {
        res.render('listar_prova.ejs', { data: resposta });
      }
    };

    bancoProva.obterProvasPorRMProfessor(rm_professor, callback);
  });

  app.get('/deletarProva/:rm_professor/:idProva', function(req, res) {
    var rm_professor = req.params.rm_professor;
    var idProva = req.params.idProva;
    var conexao = app.infra.conexao();
    var bancoProva = new app.infra.bancoProva(conexao);

    var callback = function(erro, idProva) {
      if (erro) {
        console.log(erro);
      } else {
        res.redirect('/listarProva/' + rm_professor);
      }
    };

    bancoProva.deletar(idProva, callback);
  });

  app.get('/listarProvaaluno/:rm_aluno', function(req, res) {
    var rm_aluno = req.params.rm_aluno;
    var conexao = app.infra.conexao();
    var bancoProva = new app.infra.bancoProva(conexao);

    var callback = function(erro, resposta) {
      if (erro) {
        console.log(erro);
      } else {
        console.log(resposta);

        res.render('listar_provaaluno.ejs', { data: resposta });
      }
    };

    bancoProva.listarProvasAlunoPorIdAluno(rm_aluno, callback);
  });

  app.get('/provaAluno/:rm_aluno/:id_prova', function(req, res) {
    var rm_aluno = req.params.rm_aluno;
    var id_prova = req.params.id_prova;
    var conexao = app.infra.conexao();
    var bancoProva = new app.infra.bancoProva(conexao);

    var callback = function(erro, resposta) {
      if (erro) {
        console.log(erro);
      } else {
        var questoes = resposta[0].questao_descricao.substring(1);
        questoes = questoes.slice(0, -1).split('},');

        questoes = questoes.map(item => {
          item = item + '}';
          item = item.includes('}}') ? item.replace('}}', '}') : item;

          return JSON.parse(item);
        });

        resposta[0].rm_aluno = rm_aluno;
        resposta[0].id_prova = id_prova;
        resposta[0].questao_descricao = questoes;

        res.render('prova_aluno.ejs', { data: resposta[0] });
      }
    };

    bancoProva.listarProvasPorIdProva(rm_aluno, id_prova, callback);
  });

  app.post('/provaAluno/:rm_aluno/:id_prova', function(req, res) {
    var data = req.body;
    var mencaoNota = 'I';
    var qtnAcertadas = 0;

    var callback = function(erro, resposta) {
      if (erro) {
        console.log(erro);
      } else {
        resposta.mencao_aluno = mencaoNota;
        resposta.qtnAcertadas = qtnAcertadas;

        res.render('gerarMencao.ejs', { data: resposta });
      }
    };

    var selecionadas = data.opcoesSelecionadas.split(',');

    data.corretas.forEach(item => {
      var questaoCorreta = item;

      for (const item of selecionadas) {
        var opcSelecionado = item;

        if (opcSelecionado.toLowerCase() === questaoCorreta.toLowerCase()) {
          opcSelecionado.toLowerCase() == questaoCorreta.toLowerCase()
            ? qtnAcertadas++
            : null;
          break;
        }
      }
    });

    if (qtnAcertadas === parseInt(data.mencao_mb)) {
      mencaoNota = 'MB';
    }

    if (
      qtnAcertadas < parseInt(data.mencao_mb) &&
      qtnAcertadas >= parseInt(data.mencao_b)
    ) {
      mencaoNota = 'B';
    }

    if (
      qtnAcertadas < parseInt(data.mencao_b) &&
      qtnAcertadas >= parseInt(data.mencao_r)
    ) {
      mencaoNota = 'R';
    }

    var payload = {};
    payload.mencao_aluno = mencaoNota;
    payload.rm_aluno = req.params.rm_aluno;
    payload.id_prova = req.params.id_prova;
    payload.titulo_prova = data.titulo_prova;
    payload.bimestre = data.bimestre;

    var conexao = app.infra.conexao();
    var bancoProva = new app.infra.bancoProva(conexao);
    bancoProva.salvarProvaAluno(payload, callback);
  });

  app.get('/gerarMencao', function(req, res) {
    res.render('gerarMencao.ejs');
  });

  app.get('/mencoesaluno/:rm_aluno', function(req, res) {
    var conexao = app.infra.conexao();
    var bancoResposta = new app.infra.bancoResposta(conexao);
    var rm_aluno = req.params.rm_aluno;

    var callback = function(erro, resposta) {
      if (erro) {
        console.log(erro);
      } else {
        console.log(resposta);

        res.render('mencoesaluno.ejs', { data: resposta });
      }
    };

    bancoResposta.listarPorRMAluno(rm_aluno, callback);
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

  //FILTRO-C//
  app.post('/listarQuestoesc', function(req, res) {
    var dados = req.body;
    if (
      dados.serie === '' &&
      dados.disciplina === '' &&
      dados.bimestre === ''
    ) {
      res.redirect('/listarQuestoes');
    } else {
      var conexao = app.infra.conexao();
      var questoesBanco = new app.infra.bancoQuestoes(conexao);
      questoesBanco.busca3(dados, function(erro, resposta) {
        if (erro) {
          console.log(erro);
        } else {
          console.log(resposta);
          res.render('listar_questoesc.ejs', { busca3: resposta });
        }
      });
    }
  });

  // CADASTRO PROVA - FILTRO ANO DIS BIM//
  app.post('/cadastroprovaff', function(req, res) {
    var dados = req.body;
    var conexao = app.infra.conexao();
    var questoesBanco = new app.infra.bancoQuestoes(conexao);

    questoesBanco.busca3(dados, function(erro, resposta) {
      if (erro) {
        console.log(erro);
      } else {
        console.warn(resposta);
        res.render('cadastro_provaf.ejs', { busca2: resposta });
      }
    });
  });

  // CADASTRO PROVA - FILTRO PELA DESCRIÇÃO //
  app.post('/cadastroprovafff', function(req, res) {
    var dados = req.body;
    var conexao = app.infra.conexao();
    var questoesBanco = new app.infra.bancoQuestoes(conexao);
    questoesBanco.busca2(dados, function(erro, resposta) {
      if (erro) {
        console.log('certo1');
        console.log(erro);
      } else {
        console.log('certa2');
        console.warn(resposta);
        res.render('cadastro_provaf.ejs', { busca2: resposta });
      }
    });
  });

  app.post('/cadastroprovaf', function(req, res) {
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
