import { ILoggerKey } from '../../application/domain/ILogger';
import { IServiceLocator, ProviderBuilder } from 'ts-ioc-container';
import { Logger } from '../../services/Logger';
import { AddTodo, IAddTodoActionKey } from '../../application/operations/todo/AddTodo';
import { ITodoRepositoryKey } from '../../application/domain/ITodoRepository';
import { TodoRepository } from '../../persistence/TodoRepository';
import { ITodoStoreKey } from '../../application/domain/ITodoStore';
import { TodoStore } from '../../application/domain/TodoStore';

export function prodEnv(l: IServiceLocator): IServiceLocator {
  return l.register(ILoggerKey, ProviderBuilder.fromConstructor(Logger).asScoped())
    .register(IAddTodoActionKey, ProviderBuilder.fromConstructor(AddTodo).asSingleton())
    .register(ITodoRepositoryKey, ProviderBuilder.fromConstructor(TodoRepository).asSingleton())
    .register(ITodoStoreKey, ProviderBuilder.fromConstructor(TodoStore).asSingleton());
}