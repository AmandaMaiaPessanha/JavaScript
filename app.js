var main =  function(){
  "use strict";
  //Aqui estou criando uma função no qual vai ser reutilizada nas linhas de comando 14 e 17.
  var addCommentFromInputBox = function () {
    var $new_comment;
    if ($(".commet-input input").val() !== "") {
      $new_comment = $("<p>").text($(".commet-input input").val());
      $new_comment.hide();
      $(".comments").append($new_comment);
      $new_comment.fadeIn();
      $(".commet-input input").val("");
    }
  };
  $(".commet-input button").on("click", function (event){
    //Na linha 16 e na linha 20 eu to puxando a função no qual eu define lá em cima.
    addCommentFromInputBox();
  });
  $(".commet-input input").on("keypress", function (event){
    if (event.keyCode === 13) {
      addCommentFromInputBox();
    }
  });
};
$(document).ready(main);
