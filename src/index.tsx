import { Hono } from 'hono';
import { serveStatic } from 'hono/bun';
import partialsRoute from './routes/partialsRoute';
import Head from './components/Head/Head';
import Body from './components/Body/Body';
import apiRoute from './routes/apiRoute';
import { serve } from 'bun';

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
            class="container flex flex-col items-center justify-center px-4 py-10 space-y-8"
            data-on-load="@get('/partials/load');"
            data-indicator-fetching
          >
            <div data-show="$fetching">
              <div class="flex flex-col items-center justify-center text-center p-4">
                <h1 class="text-3xl text-black font-bold animate-pulse">LOADING...</h1>
              </div>
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

