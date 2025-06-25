import { FC } from 'hono/jsx';
import type { Todo } from '../../typedefs/Todo';
import { inputClasses } from '../style/inputClasses';
import { buttonClasses } from '../style/buttonClasses';

interface TodoListItemProps {
  todo: Todo;
}

const TodoListItem = ({ todo }) => {
  const { id, content } = todo;

  return (
    <div
      class="flex flex-row items-center justify-around"
      data-signals-editing="false"
    >
      <div class="flex flex-row items-center justify-around space-x-2">
          <input type="checkbox" />
          <div data-show="$editing">
            <div class="flex flex-row items-start justify-start space-x-2">
              <input
                id="todo-list-new-content"
                type="text"
                className={inputClasses}
                data-bind="newcontent"
              />

              <button
                className={buttonClasses}
                data-on-click="console.log('editing: ', $editing); console.log('newcontent: ', $newcontent)"
                data-indicator-fetching
              >
                SUBMIT
              </button>
              <p data-class-loading="$fetching" class="text-black text-sm font-bold animate-pulse">LOADING...</p>
            </div>
          </div>
          <div data-show="!$editing">
            <div class="flex flex-row items-center justify-start space-x-6">
              <h1 class="text-2xl font-bold text-black">
                {content}
              </h1>

              <button
                className={buttonClasses}
                data-on-click="console.log('clicked'); editing = !editing"
              >
                EDIT
              </button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default TodoListItem
