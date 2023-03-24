module.exports = function(application){
  application.get("/", function(requisicao, resposta){
                                //modulo/propriedade dentro do modulo
    application.app.controllers.index.home(application, requisicao, resposta)
  });
}