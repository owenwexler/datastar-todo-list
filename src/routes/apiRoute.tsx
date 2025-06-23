import { Hono } from 'hono';
import { deleteTestUser } from '../db/models/user';
import type { Todo } from '../typedefs/Todo';
import { insertTodo } from '../db/models';
import { sleep } from 'bun';
import { getAllTodos } from '../db/models.ts';

const apiRoute = new Hono();

apiRoute.get('/', (c) => {
  return c.json({ text: 'Hello from API!' });
});

apiRoute.get('/get-todos', async (c) => {
  try {
    const response = await getAllTodos();
    return c.json({ response });
  } catch (error) {
    console.error(error);
    return c.json({ error }); 
  }
});

apiRoute.get('/seed-db', async (c) => {
  try {
    const promises = [];

    const seedTodos: Todo[] = [
      {
        id: '5f96368d-eafd-4b67-bb30-978d751ff2b1',
        content: 'Go Gym',
        checked: false
      },
      {
        id: '7aab2b80-dd49-483a-b9bc-90e7b965a82e',
        content: 'Learn Datastar',
        checked: false
      }
    ]

    for (const todo of seedTodos) {
      const result = await insertTodo(todo);
      await sleep(1000);
    }

    const response = await Promise.all(promises);

    return c.json({ response });
    
  } catch (error) {
    console.error(error);
    return c.json({ error }); 
  }
});

export default apiRoute;
