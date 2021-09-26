import { combineLatest, map, Observable } from 'rxjs';
import { ITodo } from './ITodo';
import { IFilterParams, ITodoStore } from './ITodoStore';
import { ReactiveObject } from 'clean-reactive-architecture';

export interface IFilterPriorityParams {
  minPriority: number;
  maxPriority: number;
}

const hasValidPriority =
  ({ minPriority, maxPriority }: IFilterPriorityParams) =>
  (todo: ITodo): boolean => {
    return minPriority <= todo.priority && todo.priority <= maxPriority;
  };

const isTodoValid =
  (params: IFilterParams) =>
  (todo: ITodo): boolean => {
    return hasValidPriority(params)(todo);
  };

function filterList(list: ITodo[], filter: IFilterParams): ITodo[] {
  return list.filter(isTodoValid(filter));
}

export class TodoStore implements ITodoStore {
  private all$ = new ReactiveObject<ITodo[]>([]);
  private filterParams$ = new ReactiveObject<IFilterParams>({ minPriority: 0, maxPriority: 5 });

  getItems(): Observable<ITodo[]> {
    return combineLatest([this.all$.toObservable(), this.filterParams$.toObservable()]).pipe(
      map(([all, params]) => filterList(all, params)),
    );
  }

  getFilterParams(): Observable<IFilterParams> {
    return this.filterParams$.toObservable();
  }

  addTodo(todo: ITodo): void {
    this.all$.update((items) => items.concat([todo]));
  }

  deleteTodo(id: string): void {
    this.all$.update((items) => items.filter((item) => item.id !== id));
  }

  setTodos(todos: ITodo[]): void {
    this.all$.update(() => todos);
  }

  setFilter(params: Partial<IFilterParams>): void {
    this.filterParams$.update((state) => ({
      ...state,
      ...params,
    }));
  }
}
