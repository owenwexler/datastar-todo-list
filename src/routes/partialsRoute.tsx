import { Hono } from 'hono';
import InputForm from '../components/InputForm/InputForm';
import Hello from '../components/Hello/Hello';
import Counter from '../components/Counter/Counter';

const partialsRoute = new Hono();

partialsRoute.get('/load', async (c) => {
  console.log('GET /load');

  return c.html(
    <>
      <div id="hello-container" class="flex flex-col items-center justify-center">
      </div>
    </>
  );
});

export default partialsRoute;
