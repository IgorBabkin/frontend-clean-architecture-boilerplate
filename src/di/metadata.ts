import {InjectMetadataCollector, MethodsMetadataCollector} from "ts-ioc-container";

export const injectMetadataCollector = new InjectMetadataCollector(Symbol.for('constructor_metadata_key'));
export const onDisposeMethodsMetadataCollector = new MethodsMetadataCollector(Symbol.for('on_dispose'));
export const onConstructMethodsMetadataCollector = new MethodsMetadataCollector(Symbol.for('on_construct'));