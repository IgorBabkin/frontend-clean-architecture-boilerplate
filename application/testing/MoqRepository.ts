import { IMock } from 'moq.ts';
import { IMockRepository, ProviderKey } from 'ts-ioc-container';

export class MoqRepository implements IMockRepository {
  private mocks = new Map<ProviderKey, IMock<any>>();

  constructor(private createMock: <T>() => IMock<T>) {}

  resolve<T>(key: ProviderKey): T {
    return this.resolveMock<T>(key).object();
  }

  dispose(): void {
    this.mocks.clear();
  }

  resolveMock<T>(key: ProviderKey): IMock<T> {
    if (!this.mocks.has(key)) {
      this.mocks.set(key, this.createMock());
    }
    return this.mocks.get(key) as IMock<T>;
  }
}
