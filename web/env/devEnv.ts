import {
  AddTodo,
  IAddTodoActionKey,
  ILoggerKey,
  ITodoRepositoryKey,
  ITodoStoreKey,
  TodoStore,
} from '../../application';
import { IServiceLocator } from 'ts-ioc-container';
import { ConsoleLogger } from '../../infrastructure/ConsoleLogger';
import { StubTodoRepository } from '../../infrastructure/StubTodoRepository';
import { fromClass } from '../../application/decorators';

export function devEnv(l: IServiceLocator): IServiceLocator {
  return l
    .register(ILoggerKey, fromClass(ConsoleLogger).build())
    .register(IAddTodoActionKey, fromClass(AddTodo).build())
    .register(ITodoRepositoryKey, fromClass(StubTodoRepository).build())
    .register(ITodoStoreKey, fromClass(TodoStore).build());
}
