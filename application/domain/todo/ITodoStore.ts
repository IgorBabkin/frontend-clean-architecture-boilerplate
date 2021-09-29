import { Observable } from 'rxjs';
import { ITodo } from './ITodo';
import { IFilterPriorityParams } from './TodoStore';

export const ITodoStoreKey = Symbol.for('ITodoStore');

export type IFilterParams = IFilterPriorityParams;

export interface ITodoStore {
  getFilterParams(): Observable<IFilterParams>;

  setFilter(params: Partial<IFilterParams>): void;

  addTodo(todo: ITodo): void;

  deleteTodo(id: string): void;

  setTodos(todos: ITodo[]): void;

  getItems(): Observable<ITodo[]>;
}
