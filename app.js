var main =  function () {
  "use strict";

  $(".commet-input button").on("click", function(event) {
    $(".comments").append("<p>this is a new comment</p>");
  });
};

$(document).ready(main);
