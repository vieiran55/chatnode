module.exports = function(application){
  application.post("/chat", function(requisicao, resposta){

    application.app.controllers.chat.iniciaChat(application, requisicao, resposta);
  });

  application.get("/chat", function(requisicao, resposta){

    application.app.controllers.chat.iniciaChat(application, requisicao, resposta);
  });
}