
$(document).ready(function() {

  var ref = new Firebase("https://todos-tania.firebaseio.com/todos");


  $("#btn").click(function(e) {
    e.preventDefault();
    var todo = $('#todo').val();
    // todos.push(todo);

    ref.set({
      name: todo

    });


    $("input[type=text]").val('');

    console.log("todos: ", todos.name);

    ref.on('child_added', function(snapshot) {
      var newTodo = snapshot.val();
        consoe.log( "newTodo",newTodo);
        $("#LScontain").append("<div class='todoItem'>" + newTodo + "</div>");
    });


  }); // end btn

});
