import { InjectionToken, Locator, ProviderKey } from 'react-ts-ioc-container';
import { IServiceLocator, ProviderBuilder } from 'ts-ioc-container';
import { IScopeContextKey } from './IScopeContextKey';

export class LocatorAdapter implements Locator {
  constructor(private locator: IServiceLocator) {}

  createScope<T>(context?: T): Locator {
    const scope = this.locator.createScope();
    if (context) {
      scope.register(IScopeContextKey, ProviderBuilder.fromValue(context).build());
    }
    return new LocatorAdapter(scope);
  }

  remove(): void {
    return this.locator.dispose();
  }

  resolve<T>(key: InjectionToken<T>, ...deps: unknown[]): T {
    return this.locator.resolve(key, ...deps);
  }

  register<T>(key: ProviderKey, value: T): this {
    this.locator.register(key, ProviderBuilder.fromValue(value).build());
    return this;
  }
}
