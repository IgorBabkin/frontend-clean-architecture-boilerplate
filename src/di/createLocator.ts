import { IInstanceHook, IocLocatorBuilder, IServiceLocator, ProviderBuilder } from 'ts-ioc-container';
import {
  injectMetadataCollector,
  onConstructMethodsMetadataCollector,
  onDisposeMethodsMetadataCollector,
} from './metadata';
import { ILoggerKey } from '../domain/ILogger';
import { Logger } from '../infrastructure/Logger';
import { ITodoStoreKey } from '../domain/ITodoStore';
import { AddTodo, IAddTodoActionKey } from '../operations/todo/AddTodo';
import { TodoStore } from '../domain/TodoStore';
import { ITodoRepositoryKey } from '../domain/ITodoRepository';
import { TodoRepository } from '../infrastructure/TodoRepository';
import { isDisposable, isInitializable } from 'clean-reactive-architecture';

const hook: IInstanceHook = {
  onConstruct<GInstance>(instance: GInstance) {
    onConstructMethodsMetadataCollector.invokeHooksOf(instance);
    if (isInitializable(instance)) {
      instance.initialize();
    }
  },
  onDispose<GInstance>(instance: GInstance) {
    onDisposeMethodsMetadataCollector.invokeHooksOf(instance);
    if (isDisposable(instance)) {
      instance.dispose();
    }
  },
};

export function createLocator(): IServiceLocator {
  const locator = new IocLocatorBuilder(injectMetadataCollector).withInjectorHook(hook).build();
  return locator
    .register(ILoggerKey, ProviderBuilder.fromConstructor(Logger).asScoped())
    .register(IAddTodoActionKey, ProviderBuilder.fromConstructor(AddTodo).asSingleton())
    .register(ITodoRepositoryKey, ProviderBuilder.fromConstructor(TodoRepository).asSingleton())
    .register(ITodoStoreKey, ProviderBuilder.fromConstructor(TodoStore).asSingleton());
}
