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

export function devEnv(l: IServiceLocator): IServiceLocator {
  return l
    .register(ILoggerKey, ProviderBuilder.fromConstructor(ConsoleLogger).forLevel(1).asSingleton())
    .register(IAddTodoActionKey, ProviderBuilder.fromConstructor(AddTodo).forLevel(0).asSingleton())
    .register(ITodoRepositoryKey, ProviderBuilder.fromConstructor(StubTodoRepository).forLevel(0).asSingleton())
    .register(ITodoStoreKey, ProviderBuilder.fromConstructor(TodoStore).forLevel(0).asSingleton());
}
