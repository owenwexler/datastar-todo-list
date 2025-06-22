import { FC } from 'hono/jsx';
import type { Todo } from '../../typedefs/Todo';
import { inputClasses } from '../style/inputClasses';
import { buttonClasses } from '../style/buttonClasses';

interface TodoListItemProps {
  todo: Todo;
}

const TodoListItem = ({ todo }) => {
  const { id, content, userId } = todo;

  return (
    <div
      class="flex flex-row items-center justify-around"
      data-signal-editing="false"
      data-signal-newcontent=""
    >
      <div class="flex flex-row items-start justify-start space-x-2">
        <input type="checkbox" data-bind-checkboxes.checkbox1 />
        <div>
          <span data-show="$editing = 'true'">
            <div class="flex flex-row items-start-justify-start space-x-2">
              <input
                type="text"
                className={inputClasses}
                data-bind-newcontent
              />

              <button
                className={buttonClasses}
                data-on-click="@get('/partials/edit-todo')"
                data-indicator-fetching
              >
                SUBMIT
              </button>
              <p data-class-loading="$fetching" class="text-black text-sm font-bold animate-pulse">LOADING...</p>
            </div>
          </span>
          <span data=show="$editing = 'false'">
            <h1 class="text-2xl font-bold text-black">
              {content}
            </h1>
          <span>
        </div>
      </div>
    </div>
  )
}

export default TodoListItem
