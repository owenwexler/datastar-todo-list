import { FC } from 'hono/jsx';

import type { Todo } from '../../typedefs/Todo';

import TodoListItem from './TodoListItem';

interface TodoListProps {
  todos: Todo[];
}

const TodoList: FC<TodoListProps> = ({ todos }) => {
  console.log('TODO LIST LOADED SUCCESSFULLY: ', todos);
  return (
    <div class="flex flex-col items-center justify-center space-y-3">
      <h1 class="text-black text-3xl font-bold">
        TODO LIST
      </h1>
      {
        todos.map(todo => <TodoListItem todo={todo} />)
      }
    </div>
  )
}

export default TodoList;
