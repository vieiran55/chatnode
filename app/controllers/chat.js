module.exports.iniciaChat = function(application, requisicao, resposta){

  var dadosForm = requisicao.body;
                                                                //nao vazio
  requisicao.assert("apelido", "Nome ou apelido é obrigatório").notEmpty();
                                                                //length tamanho
  requisicao.assert("apelido", "Nome ou apelido deve conter entre 3 e 15 caracteres").len(3, 15);

  var erros = requisicao.validationErrors();

  if(erros){
    resposta.render("index", {validacao : erros });

    // para finalizar o processo, pode ser usado para redirecionar uma pagina tambem.
    return;
  }

  resposta.render("chat");
}