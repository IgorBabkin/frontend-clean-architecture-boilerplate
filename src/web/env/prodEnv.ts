import {
  AddTodo,
  IAddTodoActionKey,
  ILoggerKey,
  ITodoRepositoryKey,
  ITodoStoreKey,
  TodoStore,
} from '../../application';
import { IServiceLocator, ProviderBuilder } from 'ts-ioc-container';
import { ConsoleLogger } from '../../service/ConsoleLogger';
import { StubTodoRepository } from '../../persistence/StubTodoRepository';

export function prodEnv(l: IServiceLocator): IServiceLocator {
  return l
    .register(ILoggerKey, ProviderBuilder.fromConstructor(ConsoleLogger).asScoped())
    .register(IAddTodoActionKey, ProviderBuilder.fromConstructor(AddTodo).asSingleton())
    .register(ITodoRepositoryKey, ProviderBuilder.fromConstructor(StubTodoRepository).asSingleton())
    .register(ITodoStoreKey, ProviderBuilder.fromConstructor(TodoStore).asSingleton());
}
