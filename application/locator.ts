import { HookedInjector, IInstanceHook, IocInjector, IServiceLocator, ServiceLocator } from 'ts-ioc-container';
import {
  injectMetadataCollector,
  onConstructMethodsMetadataCollector,
  onDisposeMethodsMetadataCollector,
} from './metadata';
import { isDisposable, isInitializable } from 'clean-use-case';

export function createLocator(): IServiceLocator {
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
  return ServiceLocator.root(new HookedInjector(new IocInjector(injectMetadataCollector), hook));
}
