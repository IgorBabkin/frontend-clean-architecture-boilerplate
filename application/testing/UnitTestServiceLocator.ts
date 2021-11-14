import {
  InjectionToken,
  IocInjector,
  IProvider,
  IServiceLocator,
  MockedRepository,
  ProviderKey,
  ProviderRepository,
  ServiceLocator,
} from 'ts-ioc-container';
import { IMock } from 'moq.ts';
import { MoqProviderStorage } from './MoqProviderStorage';
import { injectMetadataCollector } from '../metadata';

export class UnitTestServiceLocator implements IServiceLocator {
  private readonly mockedStorage: MoqProviderStorage;
  private readonly locator: IServiceLocator;

  constructor(createMock: <T>() => IMock<T>) {
    this.mockedStorage = new MoqProviderStorage(createMock);
    this.locator = new ServiceLocator(
      new IocInjector(injectMetadataCollector),
      new MockedRepository(ProviderRepository.root(), this.mockedStorage),
    );
  }

  findMock<T>(key: ProviderKey): IMock<T> {
    return this.mockedStorage.findOrCreate<T>(key).mock;
  }

  createScope(): IServiceLocator {
    return this.locator.createScope();
  }

  dispose(): void {
    this.locator.dispose();
  }

  register(key: ProviderKey, provider: IProvider<unknown>): this {
    this.locator.register(key, provider);
    return this;
  }

  resolve<T>(key: InjectionToken<T>, ...deps: any[]): T {
    return this.locator.resolve(key, ...deps);
  }
}
