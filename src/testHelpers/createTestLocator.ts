import { IocLocatorBuilder, IServiceLocator, MockProviderStorage } from 'ts-ioc-container';
import { injectMetadataCollector } from '../di/metadata';
import { LocatorHook } from '../di/LocatorHook';
import { IMockProviderStorage } from 'ts-ioc-container/esm/features/mock/IMockProviderStorage';
import { MoqProviderStorage } from './MoqProviderStorage';
import { createMock, MoqProvider } from './MoqProvider';

export function createMoqProviderStorage(): MoqProviderStorage {
  return new MoqProviderStorage(new MockProviderStorage(() => new MoqProvider(createMock())));
}

export function createTestLocator(mockedProviderStorage: IMockProviderStorage): IServiceLocator {
  return new IocLocatorBuilder(injectMetadataCollector)
    .withInjectorHook(new LocatorHook())
    .withMockedRepository(mockedProviderStorage)
    .build();
}