import {
  constructor,
  createArgsFnDecorator,
  createInjectDecorator,
  createLevelDecorator,
  createMethodHookDecorator,
  createProviderHookDecorator,
  createSingletonDecorator,
  createTagsDecorator,
  ProviderBuilder,
} from 'ts-ioc-container';
import {
  injectMetadataCollector,
  onConstructMethodsMetadataCollector,
  onDisposeMethodsMetadataCollector,
  providersMetadataCollector,
} from './metadata';
import { createAddKeysDecorator } from 'ts-ioc-container/cjm/features/scope/decorators';

export const inject = createInjectDecorator(injectMetadataCollector);

export const onConstruct = createMethodHookDecorator(onConstructMethodsMetadataCollector);
export const onDispose = createMethodHookDecorator(onDisposeMethodsMetadataCollector);

export const hook = createProviderHookDecorator(providersMetadataCollector);
export const argsFn = createArgsFnDecorator(providersMetadataCollector);
export const keys = createAddKeysDecorator(providersMetadataCollector);
export const singleton = createSingletonDecorator(providersMetadataCollector);
export const level = createLevelDecorator(providersMetadataCollector);
export const tags = createTagsDecorator(providersMetadataCollector);

export const fromClass = <T>(target: constructor<T>) =>
  ProviderBuilder.fromClass(target).withReducer(providersMetadataCollector.findReducerOrCreate(target));
