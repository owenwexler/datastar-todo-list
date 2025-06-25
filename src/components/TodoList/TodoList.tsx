import TodoListItem from "./TodoListItem";

interface TodoListProps {
  todos: Todo[];
}

const TodoList: FC<TodoListProps> = ({ todos }) => {
  return (
    <div id="todo-container" class="flex flex-col items-center justify-center space-y-3">
      {
        todos.map(todo => <TodoListItem todo={todo} />)
      }
    </div>
  )
}

export default TodoList;
