import {
  AddTodo,
  IAddTodoActionKey,
  ILoggerKey,
  ITodoRepositoryKey,
  ITodoStoreKey,
  TodoStore,
} from '../../application';
import { IServiceLocator, ProviderBuilder } from 'ts-ioc-container';
import { ConsoleLogger } from '../../infrastructure/ConsoleLogger';
import { StubTodoRepository } from '../../infrastructure/StubTodoRepository';

export function prodEnv(l: IServiceLocator): IServiceLocator {
  return l
    .register(ILoggerKey, ProviderBuilder.fromConstructor(ConsoleLogger).asSingleton().forLevel(1).build())
    .register(IAddTodoActionKey, ProviderBuilder.fromConstructor(AddTodo).asSingleton().forLevel(0).build())
    .register(ITodoRepositoryKey, ProviderBuilder.fromConstructor(StubTodoRepository).asSingleton().forLevel(0).build())
    .register(ITodoStoreKey, ProviderBuilder.fromConstructor(TodoStore).asSingleton().forLevel(0).build());
}
