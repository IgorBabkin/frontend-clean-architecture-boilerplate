import { createHookDecorator, createInjectDecorator } from 'ts-ioc-container';
import {
  injectMetadataCollector,
  onConstructMethodsMetadataCollector,
  onDisposeMethodsMetadataCollector,
} from './metadata';

export const inject = createInjectDecorator(injectMetadataCollector);
export const onConstruct = createHookDecorator(onConstructMethodsMetadataCollector);
export const onDispose = createHookDecorator(onDisposeMethodsMetadataCollector);
