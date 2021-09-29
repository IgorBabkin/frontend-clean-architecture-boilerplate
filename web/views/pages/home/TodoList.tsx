import React, { FunctionComponent } from 'react';
import { Each, useObservables } from 'reactivex-react';
import {
  DeleteTodo,
  FilterTodoList,
  getRandomString,
  GetTodoFilters,
  GetTodoList,
  IAddTodo,
  IAddTodoActionKey,
  repeat,
} from '../../../../application';
import { Panel } from '../../../ui';
import { useAction, useCommand, useQuery } from '../../../core/react-clean-use-case/useCases';
import { MDBBtn, MDBCol, MDBListGroup, MDBListGroupItem, MDBRow } from 'mdb-react-ui-kit';

export const TodoList: FunctionComponent = () => {
  const filterTodos = useCommand(FilterTodoList);
  const filter$ = useQuery(GetTodoFilters, (q) => q.create());
  const todoList$ = useQuery(GetTodoList, (m) => m.create());
  const addTodo = useAction<IAddTodo>(IAddTodoActionKey);
  const deleteTodo = useCommand(DeleteTodo);
  const $ = useObservables();

  return (
    <div>
      <MDBRow className="mb-3">
        <MDBCol>
          <MDBBtn
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
          </MDBBtn>
        </MDBCol>
        <MDBCol size="auto">
          <label htmlFor="min-priority" className="mx-2">
            Min Priority
          </label>
          <select
            id="min-priority"
            defaultValue={$(filter$)!.minPriority}
            onChange={({ target }) => filterTodos.execute({ minPriority: parseInt(target.value) })}
          >
            {repeat(6).map((i) => (
              <option key={i} value={i}>
                {i}
              </option>
            ))}
          </select>
          <label htmlFor="max-priority" className="mx-2">
            Max Priority
          </label>
          <select
            id="max-priority"
            defaultValue={$(filter$)!.maxPriority}
            onChange={({ target }) => filterTodos.execute({ maxPriority: parseInt(target.value) })}
          >
            {repeat(6).map((i) => (
              <option key={i} value={i}>
                {i}
              </option>
            ))}
          </select>
        </MDBCol>
      </MDBRow>
      <MDBListGroup>
        <Each obs$={todoList$}>
          {({ id, title, message, priority }) => (
            <MDBListGroupItem key={id}>
              <MDBRow className="align-items-center">
                <MDBCol>
                  {title} - {message} - {priority}
                </MDBCol>
                <MDBCol size="auto">
                  <MDBBtn className="btn btn-danger" onClick={() => deleteTodo.execute(id)}>
                    Delete
                  </MDBBtn>
                </MDBCol>
              </MDBRow>
            </MDBListGroupItem>
          )}
        </Each>
      </MDBListGroup>
    </div>
  );
};
