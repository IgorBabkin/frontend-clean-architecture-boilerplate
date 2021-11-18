import { ContainerBuilder, IContainer, IocInjector } from 'ts-ioc-container';
import { injectMetadataCollector, instanceHook } from './decorators';

export function createLocator(): IContainer {
  return new ContainerBuilder(new IocInjector(injectMetadataCollector)).setHook(instanceHook).build();
}
