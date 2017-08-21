var main =  function(){
  "use strict";
  $(".commet-input button").on("click", function (event){
    var $new_comment = $("<p>"),
      comment_text = $(".commet-input input").val();
    $new_comment.text(comment_text);
    $(".comments").append($new_comment);
  });

  $(".commet-input input").on("keypress", function (event){
    var $new_comment;
      if (event.keyCode === 13) {
        if ($(".commet-input input").val() !== "") {
          var $new_comment = $("<p>").text($(".commet-input input").val());
          $(".comments").append($new_comment);
          $(".commet-input input").val("");
        }
      }
  });
};
$(document).ready(main);
