import { InjectionToken, Locator, LocatorOptions, ProviderKey } from 'react-ts-ioc-container';
import { fromValue, IContainer } from 'ts-ioc-container';

export class LocatorAdapter implements Locator {
  constructor(private locator: IContainer) {}

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
    this.locator.register(fromValue(value).forKeys(key).build());
    return this;
  }
}
