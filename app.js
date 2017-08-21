var main =  function(){
  "use strict";
  //Aqui estou criando uma função no qual vai ser reutilizada nas linhas de comando 14 e 17.
  var addCommentFromInputBox = function () {
    var $new_comment;
    if ($(".commet-input input").val() !== "") {
      $new_comment = $("<p>").text($(".commet-input input").val());
      $new_comment.hide();
      //Aqui eu seleciona a minha seção comments e peço pra ela com o append adicionar a imformação que está na minha variável.
      $(".comments").append($new_comment);
      //Com o fadeIn eu faço um elemento aparecer gradualmente.
      $new_comment.fadeIn();
      $(".commet-input input").val("");
    }
  };
  //Evento de clique usa-se "click"
  $(".commet-input button").on("click", function (event){
    //Na linha 16 e na linha 20 eu to puxando a função no qual eu define lá em cima.
    addCommentFromInputBox();
  });
  //Evento que se pressionar uma tecla precisa usar o keypress, você precisa saber o valor que aquela possui pra poder colocar.
  //Pode-se processar qualquer  evento usando o "on".
  $(".commet-input input").on("keypress", function (event){
    if (event.keyCode === 13) {
      addCommentFromInputBox();
    }
  });
};
//Caso queira adicionar alguma interatividade no HTML, adicione aqui embaixo. Exemplo .empty, .remove, etc.
//Configura o main para ser executado depois que o DOM estiver pronto.
//Função ready, que espera o DOM estar pronta para executar o callback.
$(document).ready(main);

  //Essa função só será executada depois de 3 segundos (3000).
  //setTimeout (function() {
    //console.log ("this will print after 3 seconds");
  //}, 3000);
