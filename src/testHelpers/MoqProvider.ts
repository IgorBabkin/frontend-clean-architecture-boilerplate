import { IServiceLocator, MockProvider } from 'ts-ioc-container';
import { IMock } from 'moq.ts';

export class MoqProvider<T> extends MockProvider<T> {
  constructor(public mock: IMock<T>) {
    super();
  }

  resolve(locator: IServiceLocator, ...args: any[]): T {
    return this.mock.object();
  }
}
