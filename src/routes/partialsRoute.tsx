import { Hono } from 'hono';
import { streamSSE } from 'hono/streaming';
import InputForm from '../components/InputForm/InputForm';
import Hello from '../components/Hello/Hello';
import Counter from '../components/Counter/Counter';
import { getAllTodos } from '../db/models';
import TodoList from '../components/TodoList/TodoList';
import MainContainer from '../components/MainContainer/MainContainer';
import { fragmentEvent } from '../sse/fragmentEvent';
import Error from '../components/Error/Error';

const partialsRoute = new Hono();

partialsRoute.get('/todos', async (c) => {
  console.log('GET /load');

  try {
    const todos = await getAllTodos();

    return streamSSE(c, async (stream) => {
      await stream.writeSSE(fragmentEvent(<TodoList todos={todos} />, 'todo-container')); 
    });
  } catch (error) {
    return streamSSE(c, async (stream) => {
      await stream.writeSSE(fragmentEvent(<Error />, 'todo-container')); 
    });
  }
});

export default partialsRoute;
