import { IQuery } from 'clean-use-case';
import { ITodoState } from '../../domain/todo/ITodo';
import { map, Observable } from 'rxjs';
import { inject } from '../../decorators';
import { ITodoStore, ITodoStoreKey } from '../../domain/todo/ITodoStore';

export class GetTodoList implements IQuery<ITodoState[]> {
  constructor(@inject(ITodoStoreKey) private todoStore: ITodoStore) {}

  create(): Observable<ITodoState[]> {
    return this.todoStore.getItems().pipe(map((todos) => todos.map((i) => i.getState())));
  }
}
