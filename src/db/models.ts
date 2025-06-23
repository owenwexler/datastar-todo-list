import { sql } from 'bun';
import { v4 as uuidv4 } from 'uuid';

import type { Todo } from '../typedefs/Todo';
import db from './db';

interface CreateTodo {
  $id: string;
  $content: string;
}

interface TodoDBResponse {
  id: string;
  content: string;
  checked: number;
}

const getAllTodos = async () => {
  try {
    const result: TodoDBResponse[] | null = db.query<TodoDBResponse, Record<string, string>>('SELECT id, content, checked FROM todos ORDER BY created_at ASC').all();

    // because SQLite returns a number instead of a proper boolean this formatting step is necessary
    return result.map(todo => {
      const formattedChecked = todo.checked === 0 ? false : true;
      return { ...todo, checked: formattedChecked };
    });
  } catch (error) {
    console.error(error);
    throw error
  }
}

const insertTodo = async (newTodo: Todo) => {
  const id = newTodo.id ? newTodo.id : uuidv4();

  const insertTodoObj: CreateTodo = {
    $id: id,
    $content: newTodo.content,
  };

  try {
    const result: Todo | null = db.query<Todo, Record<string, string>>(`INSERT INTO todos
      (id, content)
      VALUES ($id, $content)
      RETURNING *;`
    ).get(insertTodoObj as unknown as Record<string, string>);

    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

const updateTodoContent = async (newTodo: Todo) => {
  const updateObj = {
    $id: newContent.id,
    $content: newContent.content
  }

  try {
    const result: Todo | null = db.query<Todo, Record<string, string>>(`UPDATE todos
      SET content = $content
      WHERE id = $id
      RETURNING *`
    ).get(updateObj as unknown as Record<string, string>);

    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

const updateTodoChecked = async (newTodo: Todo) => {
  const updateObj = {
    $id: newContent.id,
    $checked: !newContent.checked
  }

  try {
    const result: Todo | null = db.query<Todo, Record<string, string>>(`UPDATE todos
      SET checked = $checked
      WHERE id = $id
      RETURNING *`
    ).get(updateObj as unknown as Record<string, string>);

    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

const deleteTodo = async (id: string) => {
  try {
    const result: Todo | null = db.query<string, string>('DELETE FROM todos WHERE id = ? RETURNING *')
      .get(id);

    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
export {
  getAllTodos,
  insertTodo,
  deleteTodo,
  updateTodoContent,
  updateTodoChecked
}
