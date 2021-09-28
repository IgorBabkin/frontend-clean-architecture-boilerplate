import { InjectionToken, IProvider, IServiceLocator, ProviderKey } from 'ts-ioc-container';
import { createLocatorBuilder } from '../index';
import { IMock } from 'moq.ts';
import { MoqProviderStorage } from './MoqProviderStorage';

export class UnitTestServiceLocator implements IServiceLocator {
  private mockedStorage: MoqProviderStorage;
  private locator: IServiceLocator;

  constructor(createMock: <T>() => IMock<T>) {
    this.mockedStorage = new MoqProviderStorage(createMock);
    this.locator = createLocatorBuilder().withMockedRepository(this.mockedStorage).build();
  }

  findMock<T>(key: ProviderKey): IMock<T> {
    return this.mockedStorage.findOrCreate<T>(key).mock;
  }

  createLocator(): IServiceLocator {
    return this.locator.createLocator();
  }

  dispose(): void {
    this.locator.dispose();
  }

  register<T>(key: ProviderKey, provider: IProvider<T>): this {
    this.locator.register(key, provider);
    return this;
  }

  resolve<T>(key: InjectionToken<T>, ...deps: any[]): T {
    return this.locator.resolve(key, ...deps);
  }
}
