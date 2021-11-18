import { TodoStore } from './TodoStore';
import { ITodo } from './ITodo';
import { firstValueFrom } from 'rxjs';
import { UnitTestContainer } from '../../testing/UnitTestContainer';
import { createMock } from '../../testing/createMock';

describe('TodoStore', function () {
  let locator: UnitTestContainer;

  beforeEach(() => {
    locator = new UnitTestContainer(createMock);
  });

  it('filters todos', async () => {
    const todoStore = locator.resolve(TodoStore);
    todoStore.addTodo({ id: '1', priority: 1 } as ITodo);
    todoStore.addTodo({ id: '2', priority: 2 } as ITodo);
    todoStore.setFilter({ maxPriority: 1 });
    const items = await firstValueFrom(todoStore.getItems());

    expect(items!.length).toBe(1);
  });
});
