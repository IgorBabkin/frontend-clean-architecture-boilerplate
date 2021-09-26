import { AppServiceLocator } from '../di/appServiceLocator';
import { IocLocatorBuilder, IServiceLocator, ProviderKey } from 'ts-ioc-container';
import { injectMetadataCollector } from '../di/metadata';
import { LocatorHook } from '../di/LocatorHook';
import { IMock } from 'moq.ts';
import { MoqProviderStorage } from './MoqProviderStorage';

export class UnitTestServiceLocator extends AppServiceLocator {
  private mockedStorage: MoqProviderStorage;

  constructor(createMock: <T>() => IMock<T>) {
    const moqProviderStorage = new MoqProviderStorage(createMock);
    super(
      new IocLocatorBuilder(injectMetadataCollector)
        .withInjectorHook(new LocatorHook())
        .withMockedRepository(moqProviderStorage)
        .build(),
    );
    this.mockedStorage = moqProviderStorage;
  }

  findMock<T>(key: ProviderKey): IMock<T> {
    return this.mockedStorage.findOrCreate<T>(key).mock;
  }

  protected registerProviders(locator: IServiceLocator): void {
  }
}