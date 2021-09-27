import { TodoStore } from '../../application/domain/todo/TodoStore';
import { IServiceLocator } from 'ts-ioc-container';
import { ITodo } from '../../application/domain/todo/ITodo';
import { firstValueFrom } from 'rxjs';
import { UnitTestServiceLocator } from '../UnitTestServiceLocator';
import { createLooseMock } from '../createMock';

describe('TodoStore', function () {
  let locator: IServiceLocator;

  beforeEach(() => {
    locator = new UnitTestServiceLocator(createLooseMock);
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
