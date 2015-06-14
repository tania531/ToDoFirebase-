
$(document).ready(function() {

  var ref = new Firebase("https://todos-tania.firebaseio.com/todos");

  $("#btn").click(function(e) {
    e.preventDefault();
    var todo = $('#todo').val();

    ref.push({
      name: todo
    });

    $("input[type=text]").val('');
  }); // end btn

  ref.on('child_added', function (snapshot) {
    $("#LScontain").append("<div class='todoItem'>" + snapshot.val().name + "</div>");
  });
  $("#LScontain").on("click", ".todoItem", function(){
    $(this).addClass("strikethrough");
  });
});
