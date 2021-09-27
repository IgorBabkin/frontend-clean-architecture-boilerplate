import { IQuery } from 'clean-reactive-architecture';
import { IFilterParams, ITodoStore, ITodoStoreKey } from '../../domain/todo/ITodoStore';
import { inject } from '../../decorators';
import { Observable } from 'rxjs';

export class GetTodoFilters implements IQuery<IFilterParams> {
  constructor(@inject(ITodoStoreKey) private todoStore: ITodoStore) {}

  create(): Observable<IFilterParams> {
    return this.todoStore.getFilterParams();
  }
}
