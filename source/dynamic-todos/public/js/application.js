$(document).ready(function() {
  var todoTemplate = $.trim($('#todo_template').html());

  function bindEvents() {
    // Bind functions which add, remove, and complete todos to the appropriate
    // elements

    $('form').on('submit', addTodo)
    // {
    //   event.preventDefault();
    //   console.log(event.target) // => <form action="/" method="post">
    //   addData = $(this);
    //   console.log(addData);
    // })

    $('todo_template').on('click', '.complete', completeTodo)
    $('todo_template').on('click', '.delete', deleteTodo)


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

    $.ajax({
      type: 'POST',
      data: $(this),
      url: '/add_todo',
      success: function(data){
        //onsole.log(data)
        console.log(buildTodo(data))
        $('.todo_list').append(buildTodo(data))

      }

    })
    event

  }

  function completeTodo() {

  }

  function deleteTodo() {

  }


  bindEvents();
});
