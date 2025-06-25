import { FC } from 'hono/jsx';

const Loading = () => {
  return (
    <div class="flex flex-col items-center justify-center text-center p-4">
      <h1 class="text-3xl text-black font-bold animate-pulse">LOADING...</h1>
    </div>
  )
}

export default Loading; 
