import { IQuery } from 'clean-reactive-architecture';
import { ITodo } from '../../domain/todo/ITodo';
import { Observable } from 'rxjs';
import { inject } from '../../decorators';
import { ITodoStore, ITodoStoreKey } from '../../domain/todo/ITodoStore';

export class GetTodoList implements IQuery<ITodo[]> {
  constructor(@inject(ITodoStoreKey) private todoStore: ITodoStore) {}

  create(): Observable<ITodo[]> {
    return this.todoStore.getItems();
  }
}
