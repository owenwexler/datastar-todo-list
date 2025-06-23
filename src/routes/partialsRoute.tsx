import { Hono } from 'hono';
import InputForm from '../components/InputForm/InputForm';
import Hello from '../components/Hello/Hello';
import Counter from '../components/Counter/Counter';
import { getAllTodos } from '../db/models';
import TodoList from '../components/TodoList/TodoList';

const partialsRoute = new Hono();

partialsRoute.get('/load', async (c) => {
  console.log('GET /load');

  try {
    const todos = getAllTodos();

    return c.html(
      <>
        <TodoList todos={todos} />
      </>
    );
  } catch (error) {
    return c.html(
      <>
        <h1 class="text-2xl font-bold text-black">Error</h1>
      </>
    );
  }
});

export default partialsRoute;
