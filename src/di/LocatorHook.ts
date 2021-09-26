import { IInstanceHook } from 'ts-ioc-container';
import { onConstructMethodsMetadataCollector, onDisposeMethodsMetadataCollector } from './metadata';
import { isDisposable, isInitializable } from 'clean-reactive-architecture';

export class LocatorHook implements IInstanceHook {
  onConstruct<GInstance>(instance: GInstance) {
    onConstructMethodsMetadataCollector.invokeHooksOf(instance);
    if (isInitializable(instance)) {
      instance.initialize();
    }
  }
  onDispose<GInstance>(instance: GInstance) {
    onDisposeMethodsMetadataCollector.invokeHooksOf(instance);
    if (isDisposable(instance)) {
      instance.dispose();
    }
  }
}