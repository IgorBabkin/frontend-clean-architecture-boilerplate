import React, { FunctionComponent } from 'react';
import { Each, useObservables } from 'reactivex-react';
import { GetTodoList } from '../../../application/operations/todo/GetTodoList';
import { IAddTodo, IAddTodoActionKey } from '../../../application/operations/todo/AddTodo';
import { DeleteTodo } from '../../../application/operations/todo/DeleteTodo';
import { repeat } from '../../../application/core/fp';
import { GetTodoFilters } from '../../../application/operations/todo/GetTodoFilters';
import { FilterTodoList } from '../../../application/operations/todo/FilterTodoList';
import { useAction, useCommand, useQuery } from 'react-clean-reactive-architecture';
import { getRandomString } from '../../../application/core/utils';

export const TodoList: FunctionComponent = () => {
  const filterTodos = useCommand(FilterTodoList);
  const filter$ = useQuery(GetTodoFilters, (q) => q.create());
  const todoList$ = useQuery(GetTodoList, (m) => m.create());
  const addTodo = useAction<IAddTodo>(IAddTodoActionKey);
  const deleteTodo = useCommand(DeleteTodo);
  const $ = useObservables();

  return (
    <div>
      <button
        type="submit"
        className="btn btn-primary mb-3"
        onClick={() =>
          addTodo.dispatch({
            id: getRandomString(10),
            title: 'Hey',
            message: 'Hou',
            priority: Math.round((Math.random() * 10) % 5),
          })
        }
      >
        Add
      </button>
      <select
        defaultValue={$(filter$)!.minPriority}
        onChange={({ target }) => filterTodos.execute({ minPriority: parseInt(target.value) })}
      >
        {repeat(6).map((i) => (
          <option key={i} value={i}>
            {i}
          </option>
        ))}
      </select>
      <select
        defaultValue={$(filter$)!.maxPriority}
        onChange={({ target }) => filterTodos.execute({ maxPriority: parseInt(target.value) })}
      >
        {repeat(6).map((i) => (
          <option key={i} value={i}>
            {i}
          </option>
        ))}
      </select>
      <ul>
        <Each obs$={todoList$}>
          {({ id, title, message, priority }) => (
            <li key={id}>
              {title} - {message} - {priority}
              <button className="btn btn-danger" onClick={() => deleteTodo.execute(id)}>
                Delete
              </button>
            </li>
          )}
        </Each>
      </ul>
    </div>
  );
};
