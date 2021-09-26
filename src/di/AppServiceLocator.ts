import { InjectionToken, IProvider, IServiceLocator, ProviderKey } from 'ts-ioc-container';

export abstract class AppServiceLocator implements IServiceLocator {
  protected constructor(private locator: IServiceLocator) {
  }

  registerAllProviders(): this {
    this.registerProviders(this.locator);
    return this;
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

  protected abstract registerProviders(locator: IServiceLocator): void;
}