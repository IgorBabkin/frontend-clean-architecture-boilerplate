import { createMoqProviderStorage, createTestLocator } from '../testHelpers/createTestLocator';
import { TodoStore } from './TodoStore';
import { IServiceLocator } from 'ts-ioc-container';
import { MoqProviderStorage } from '../testHelpers/MoqProviderStorage';
import { ITodo } from './ITodo';
import { firstValueFrom } from 'rxjs';

describe('TodoStore', function() {
  let locator: IServiceLocator;
  let mockedProviderStorage: MoqProviderStorage;

  beforeEach(() => {
    mockedProviderStorage = createMoqProviderStorage();
    locator = createTestLocator(mockedProviderStorage);
  });

  it('filters todos', async () => {
    const todoStore = locator.resolve(TodoStore);
    todoStore.addTodo({id: '1', priority: 1} as ITodo)
    todoStore.addTodo({id: '2', priority: 2} as ITodo)
    todoStore.setFilter({maxPriority: 1});
    const items = await firstValueFrom(todoStore.getItems());

    expect(items!.length).toBe(1);
  });
});