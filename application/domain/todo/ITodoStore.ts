import { Observable } from 'rxjs';
import { ITodo } from './ITodo';

export const ITodoStoreKey = Symbol.for('ITodoStore');

export type IFilterParams = {
  minPriority: number;
  maxPriority: number;
  search: string;
  caseSensitive: boolean;
};

export interface ITodoStore {
  getFilterParams(): Observable<IFilterParams>;

  setFilter(params: Partial<IFilterParams>): void;

  addTodo(todo: ITodo): void;

  deleteTodo(id: string): void;

  setTodos(todos: ITodo[]): void;

  getItems(): Observable<ITodo[]>;
}
