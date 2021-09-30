import { ITodo, ITodoRepository, Todo } from '../application';

export class StubTodoRepository implements ITodoRepository {
  fetchAll(): Promise<ITodo[]> {
    return Promise.resolve([
      new Todo({
        id: '1',
        title: 'Shopping',
        message: 'Go to the shop',
        priority: 3,
      }),
      new Todo({
        id: '2',
        title: 'Workout',
        message: 'Go to the shop',
        priority: 5,
      }),
    ]);
  }

  addTodo(payload: ITodo): Promise<void> {
    return Promise.resolve(undefined);
  }

  delete(id: string): Promise<void> {
    return Promise.resolve(undefined);
  }
}
