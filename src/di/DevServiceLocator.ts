import { IocLocatorBuilder, IServiceLocator, ProviderBuilder } from 'ts-ioc-container';
import { injectMetadataCollector } from './metadata';
import { LocatorHook } from './LocatorHook';
import { ILoggerKey } from '../domain/ILogger';
import { Logger } from '../infrastructure/Logger';
import { AddTodo, IAddTodoActionKey } from '../operations/todo/AddTodo';
import { ITodoRepositoryKey } from '../domain/ITodoRepository';
import { TodoRepository } from '../infrastructure/TodoRepository';
import { ITodoStoreKey } from '../domain/ITodoStore';
import { TodoStore } from '../domain/TodoStore';
import { AppServiceLocator } from './appServiceLocator';

export class DevServiceLocator extends AppServiceLocator {
  constructor() {
    super(new IocLocatorBuilder(injectMetadataCollector).withInjectorHook(new LocatorHook()).build());
  }

  protected registerProviders(locator: IServiceLocator): void {
    locator.register(ILoggerKey, ProviderBuilder.fromConstructor(Logger).asScoped())
      .register(IAddTodoActionKey, ProviderBuilder.fromConstructor(AddTodo).asSingleton())
      .register(ITodoRepositoryKey, ProviderBuilder.fromConstructor(TodoRepository).asSingleton())
      .register(ITodoStoreKey, ProviderBuilder.fromConstructor(TodoStore).asSingleton());
  }
}