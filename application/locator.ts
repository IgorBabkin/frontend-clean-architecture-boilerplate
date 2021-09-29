import { ILocatorBuilder, IocLocatorBuilder } from 'ts-ioc-container';
import {
  injectMetadataCollector,
  onConstructMethodsMetadataCollector,
  onDisposeMethodsMetadataCollector,
} from './metadata';
import { isDisposable, isInitializable } from 'clean-use-case';

export function createLocatorBuilder(): ILocatorBuilder {
  return new IocLocatorBuilder(injectMetadataCollector).withInjectorHook({
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
  });
}
