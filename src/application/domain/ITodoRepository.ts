import { ITodo } from './ITodo';

export const ITodoRepositoryKey = Symbol.for('ITodoRepository');
export interface ITodoRepository {
  fetchAll(): Promise<ITodo[]>;

  addTodo(payload: ITodo): Promise<void>;

  delete(id: string): Promise<void>;
}
