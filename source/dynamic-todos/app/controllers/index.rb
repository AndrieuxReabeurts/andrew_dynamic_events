get '/' do
  # Look in app/views/index.erb
  erb :index
end

# post '/' do
#   redirect ('/')
# end

post '/add_todo' do
  p "Inside /add_todo route!"
  p params[:new_content]
  @todo = Todo.create(todo_content: params[:new_content])
  p @todo
  @todo.todo_content

end

put '/todos/:id' do
  @todo = Todo.find_by_id(params[:id])
  @todo.save
end

delete '/todos/:id' do
  @todo = Todo.find_by_id(params[:id])
  @todo.destroy
end


