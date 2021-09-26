import { ILoggerKey } from '../../domain/ILogger';
import { IServiceLocator, ProviderBuilder } from 'ts-ioc-container';
import { Logger } from '../../infrastructure/Logger';
import { AddTodo, IAddTodoActionKey } from '../../operations/todo/AddTodo';
import { ITodoRepositoryKey } from '../../domain/ITodoRepository';
import { TodoRepository } from '../../infrastructure/TodoRepository';
import { ITodoStoreKey } from '../../domain/ITodoStore';
import { TodoStore } from '../../domain/TodoStore';

export type RegisterProviders = (l: IServiceLocator) => IServiceLocator;

export const devEnv: RegisterProviders = (l) => {
  return l.register(ILoggerKey, ProviderBuilder.fromConstructor(Logger).asScoped())
    .register(IAddTodoActionKey, ProviderBuilder.fromConstructor(AddTodo).asSingleton())
    .register(ITodoRepositoryKey, ProviderBuilder.fromConstructor(TodoRepository).asSingleton())
    .register(ITodoStoreKey, ProviderBuilder.fromConstructor(TodoStore).asSingleton());
};