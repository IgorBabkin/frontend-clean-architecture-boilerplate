import { InjectionToken, Locator, LocatorOptions, ProviderKey } from 'react-ts-ioc-container';
import { constructor, IServiceLocator, ProviderBuilder } from 'ts-ioc-container';

export class LocatorAdapter implements Locator {
  constructor(private locator: IServiceLocator) {}

  createScope({ tags }: LocatorOptions): Locator {
    return new LocatorAdapter(this.locator.createScope(tags));
  }

  remove(): void {
    return this.locator.dispose();
  }

  resolve<T>(key: InjectionToken<T>, ...deps: unknown[]): T {
    return this.locator.resolve(key, ...deps);
  }

  register<T>(key: ProviderKey, value: T): this {
    this.locator.register(ProviderBuilder.fromValue(value).forKeys(key).build());
    return this;
  }

  resolveClass<T>(key: constructor<T>, ...deps: any[]): T {
    return this.locator.resolveClass(key, ...deps);
  }
}
