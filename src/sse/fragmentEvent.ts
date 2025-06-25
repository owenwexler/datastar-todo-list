import { type HtmlEscapedString } from 'hono/utils/html';

const fragmentEvent = (
  html: HtmlEscapedString | Promise<HtmlEscapedString>,
  id: string
) => {
  return {
    data: `fragments ${html.toString().replaceAll("\n", "")}\n\n`,
    event: "datastar-merge-fragments",
    id: `${id}`,
  };
};

export {
  fragmentEvent
}
