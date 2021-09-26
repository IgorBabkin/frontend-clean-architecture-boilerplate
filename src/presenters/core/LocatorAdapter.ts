import { InjectionToken, Locator } from 'react-clean-reactive-architecture';
import { IScopeContextKey, IServiceLocator, ProviderBuilder, ScopeContext } from 'ts-ioc-container';

export class LocatorAdapter implements Locator {
  constructor(private locator: IServiceLocator) {
  }

  createScope<T>(context?: T): Locator {
    const scope = this.locator.createLocator();
    if (context) {
      scope.register(IScopeContextKey, ProviderBuilder.fromInstance(new ScopeContext(context)).asRequested());
    }
    return new LocatorAdapter(scope);
  }

  remove(): void {
    return this.locator.dispose();
  }

  resolve<T>(key: InjectionToken<T>, ...deps: unknown[]): T {
    return this.locator.resolve(key, ...deps);
  }
}