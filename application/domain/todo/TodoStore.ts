import { combineLatest, map, Observable } from 'rxjs';
import { ITodo } from './ITodo';
import { IFilterParams, ITodoStore } from './ITodoStore';
import { ObservableStore } from 'reactivex-store';

export class TodoStore implements ITodoStore {
  private all$ = new ObservableStore<ITodo[]>([]);
  private filterParams$ = new ObservableStore<IFilterParams>({
    search: '',
    minPriority: 0,
    maxPriority: 5,
    caseSensitive: false,
  });

  getItems(): Observable<ITodo[]> {
    return combineLatest([this.all$.toObservable(), this.filterParams$.toObservable()]).pipe(
      map(([all, params]) =>
        all.filter((todo) => {
          return (
            todo.hasPriorityBetween([params.minPriority, params.maxPriority]) &&
            todo.hasText(params.search, { caseSensitive: params.caseSensitive })
          );
        }),
      ),
    );
  }

  getFilterParams(): Observable<IFilterParams> {
    return this.filterParams$.toObservable();
  }

  addTodo(todo: ITodo): void {
    this.all$.map((items) => items.concat([todo]));
  }

  deleteTodo(id: string): void {
    this.all$.map((items) => items.filter((item) => item.id !== id));
  }

  setTodos(todos: ITodo[]): void {
    this.all$.map(() => todos);
  }

  setFilter(params: Partial<IFilterParams>): void {
    this.filterParams$.map((state) => ({
      ...state,
      ...params,
    }));
  }
}
