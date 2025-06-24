import type { FC } from 'hono/jsx';

interface HeadProps {
  title: string;
}

const Head: FC<HeadProps> = ({ title }) => {
  return (
    <head>
      <meta charset="utf-8" />
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <meta name="viewport" content="width=device-width" />
      <script type="module" src="/static/lib/datastar/datastar-1-0-0-beta-11-451cf4728ff6863d.js"></script>
      <link rel="stylesheet" href="/static/css/output.css" />
      <title>{title}</title>
    </head>
  );
}

export default Head;

