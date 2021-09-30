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
} from '../../../../application';
import { useAction, useCommand, useQuery } from '../../../core/react-clean-use-case/useCases';
import { MDBBtn, MDBCol, MDBListGroup, MDBListGroupItem, MDBRow } from 'mdb-react-ui-kit';
import { Filter } from './Filter';

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
          <Filter values={$(filter$)!} onChange={(values) => filterTodos.execute(values)} />
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
