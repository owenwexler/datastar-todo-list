import { FC } from 'hono/jsx';

import type { Todo } from '../../typedefs/Todo';

import TodoListItem from './TodoListItem';

interface TodoListProps {
  todos: Todo[];
}

const TodoList: FC<TodoListProps> = ({ todos }) => {
  return todos.map(todo => <TodoListItem todo={todo} />)
}

export default TodoList;
