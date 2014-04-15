get '/' do
  # Look in app/views/index.erb
  erb :index
end

# post '/' do
#   redirect ('/')
# end

post '/add_todo' do
  p "Inside /add_todo route!"
  p params
  @todo = Todo.create(todo_content: params[:new_content])
  p @todo
  @todo.todo_content

end

put '/complete' do
  p "inside complete route"
  p "#{ params.inspect}"
  todo = Todo.find_by_todo_content(params[:content])
  todo.completed = true
  todo.save
end

delete '/delete' do
  puts "#{ params.inspect }"
  puts "#{ params[:content]}"
  todo = Todo.find_by_todo_content(params[:content])
  p todo.todo_content
  todo.destroy
end


