import { Hono } from 'hono';
import { serveStatic } from 'hono/bun';
import partialsRoute from './routes/partialsRoute';
import Head from './components/Head/Head';
import Body from './components/Body/Body';
import apiRoute from './routes/apiRoute';
import { serve } from 'bun';
import Loading from './components/Loading/Loading';

const app = new Hono();

app.use('/static/*', serveStatic({ root: './' }))

app.route('/partials', partialsRoute);
app.route('/api', apiRoute);

app.get('/', async (c) => {
  return c.html(
    <html lang="en">
      <Head title="Datastar Todo List"/>
      <Body>
        <main class="flex flex-col items-center justify-center bg-white text-black">
          <div
            id="main-container"
            class="container flex flex-col items-center justify-center px-4 py-10 space-y-4"
            data-on-load="@get('/partials/todos')"
          >
            <h1 class="text-3xl font-bold text-black">THE BEST TODO LIST EVER</h1>
            <div
              id="todo-container"
              class="flex flex-col items-center justify-center space-x-2"
            >
              <Loading />
            </div>
          </div>
        </main>
      </Body>
    </html>
  );
});

serve({
  fetch: app.fetch,
  port: Number(Bun.env.PORT)
});

export default app;

