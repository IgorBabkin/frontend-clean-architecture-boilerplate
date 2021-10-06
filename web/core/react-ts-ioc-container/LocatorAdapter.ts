import { InjectionToken, Locator, ProviderKey } from 'react-ts-ioc-container';
import { IServiceLocator, ProviderBuilder } from 'ts-ioc-container';
import { IScopeContextKey } from './IScopeContextKey';

export class LocatorAdapter implements Locator {
  constructor(private locator: IServiceLocator) {}

  createScope<T>(context?: T): Locator {
    const scope = this.locator.createLocator();
    if (context) {
      scope.register(IScopeContextKey, ProviderBuilder.fromInstance(context).build());
    }
    return new LocatorAdapter(scope);
  }

  remove(): void {
    return this.locator.dispose();
  }

  resolve<T>(key: InjectionToken<T>, ...deps: unknown[]): T {
    return this.locator.resolve(key, ...deps);
  }

  register<T>(token: ProviderKey, value: T): this {
    this.locator.register(token, ProviderBuilder.fromInstance(value).build());
    return this;
  }
}
