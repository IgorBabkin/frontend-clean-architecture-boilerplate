import {
  constructor,
  createArgsFnDecorator,
  createInjectDecorator,
  createLevelDecorator,
  createMethodHookDecorator,
  createSingletonDecorator,
  createTagsDecorator,
  fromClass as fromConstructor,
  createAddKeysDecorator,
  IInstanceHook,
  InjectMetadataCollector,
  MethodsMetadataCollector,
  ProvidersMetadataCollector,
} from 'ts-ioc-container';
import { isDisposable, isInitializable } from 'clean-use-case';

export const injectMetadataCollector = new InjectMetadataCollector(Symbol.for('constructor_metadata_key'));
const onDisposeMethodsMetadataCollector = new MethodsMetadataCollector(Symbol.for('on_dispose'));
const onConstructMethodsMetadataCollector = new MethodsMetadataCollector(Symbol.for('on_construct'));
const providersMetadataCollector = ProvidersMetadataCollector.create();

export const inject = createInjectDecorator(injectMetadataCollector);

export const onConstruct = createMethodHookDecorator(onConstructMethodsMetadataCollector);
export const onDispose = createMethodHookDecorator(onDisposeMethodsMetadataCollector);

export const argsFn = createArgsFnDecorator(providersMetadataCollector);
export const keys = createAddKeysDecorator(providersMetadataCollector);
export const singleton = createSingletonDecorator(providersMetadataCollector);
export const level = createLevelDecorator(providersMetadataCollector);
export const tags = createTagsDecorator(providersMetadataCollector);

export const instanceHook: IInstanceHook = {
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

export const fromClass = <T>(target: constructor<T>) =>
  fromConstructor(target).withReducer(providersMetadataCollector.findReducerOrCreate(target));
