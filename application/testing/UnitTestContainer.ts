import {
  ContainerBuilder,
  IContainer,
  IKeyedProvider,
  InjectionToken,
  IocInjector,
  MockedServiceLocator,
  ProviderKey,
  RegisterOptions,
} from 'ts-ioc-container';
import { IMock } from 'moq.ts';
import { MoqRepository } from './MoqRepository';
import { injectMetadataCollector, instanceHook } from '../decorators';

export class UnitTestContainer implements IContainer {
  private readonly mockRepository: MoqRepository;
  private readonly locator: IContainer;

  constructor(createMock: <T>() => IMock<T>) {
    this.mockRepository = new MoqRepository(createMock);
    this.locator = new ContainerBuilder(new IocInjector(injectMetadataCollector))
      .mapLocator((l) => new MockedServiceLocator(l, this.mockRepository))
      .setHook(instanceHook)
      .build();
  }

  findMock<T>(key: ProviderKey): IMock<T> {
    return this.mockRepository.resolveMock<T>(key);
  }

  createScope(): IContainer {
    throw new Error('MethodNotImplemented');
  }

  dispose(): void {
    this.mockRepository.dispose();
  }

  register(fn: IKeyedProvider<unknown>, options?: Partial<RegisterOptions>): this {
    this.locator.register(fn, options);
    return this;
  }

  resolve<T>(key: InjectionToken<T>, ...deps: any[]): T {
    return this.locator.resolve(key, ...deps);
  }
}
