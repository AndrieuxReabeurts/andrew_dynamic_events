$(document).ready(function() {
  var todoTemplate = $.trim($('#todo_template').html());

  function bindEvents() {
    // Bind functions which add, remove, and complete todos to the appropriate
    // elements

    $('form').on('submit', addTodo)
    $('.todo_list').on('click', '.complete', completeTodo)
    $('.todo_list').on('click', '.delete', deleteTodo)


  }

  //Create functions to add, remove and complete todos



  function buildTodo(todoName) {
    // Creates an jQueryDOMElement from the todoTemplate.
    var $todo = $(todoTemplate);
    // Modifies it's text to use the passed in todoName.
    $todo.find('h2').text(todoName);
    // Returns the jQueryDOMElement to be used elsewhere.
    return $todo;
  }

  function addTodo(event) {
    event.preventDefault();
    var addData = $('.todo')
    //debugger

    $.ajax({
      type: 'POST',
      data: addData,
      url: '/add_todo',
      success: function(data){
        console.log(buildTodo(data))
        $('.todo_list').append(buildTodo(data))

      }

    })
    //event

  }

  function completeTodo(event) {
    event.preventDefault();
    var completeDiv = $(this).parents('.todo')
    var completeText = $(this).parents('ul').siblings('h2').text()
    var completeLink = $(this)

    $.ajax({
      type: 'PUT',
      data: { content: completeText },
      //json hash for route, sending triggered todo tasks content
      url: '/complete',
      success: function(){
        $(completeDiv).addClass('complete');
        completeLink.remove()
      }

    })
  }

  function deleteTodo(event) {
    event.preventDefault();
    var divToDelete = $(this).parents('.todo')
    var deleteData = $(this).parents('ul').siblings('h2').text()
    console.log($(this).text());

    $.ajax({
      type: 'DELETE',
      data: { content: deleteData },
      url: '/delete',
      success: function(data){
        $(divToDelete).remove();
      }

    })

  }


  bindEvents();
});
