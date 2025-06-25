import type { FC } from "hono/jsx";

const Error: FC = () => {
  return (
    <div class="flex flex-col items-center justify-center">
      <h1 class="text-3xl text-black font-bold">We are sorry, something went wrong.</h1>
    </div>
  )
}

export default Error;
