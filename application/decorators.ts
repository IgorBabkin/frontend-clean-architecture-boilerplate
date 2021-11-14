import {
  constructor,
  createArgsFnDecorator,
  createHookDecorator,
  createInjectDecorator,
  createLevelDecorator,
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

export const onConstruct = createHookDecorator(onConstructMethodsMetadataCollector);
export const onDispose = createHookDecorator(onDisposeMethodsMetadataCollector);

export const argsFn = createArgsFnDecorator(providersMetadataCollector);
export const keys = createAddKeysDecorator(providersMetadataCollector);
export const singleton = createSingletonDecorator(providersMetadataCollector);
export const level = createLevelDecorator(providersMetadataCollector);
export const tags = createTagsDecorator(providersMetadataCollector);

export const fromClass = <T>(target: constructor<T>) =>
  ProviderBuilder.fromClass(target).withReducer(providersMetadataCollector.findReducerOrCreate(target));
