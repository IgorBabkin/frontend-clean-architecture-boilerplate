import { MockProviderStorage, ProviderKey, VendorMockProviderStorage } from 'ts-ioc-container';
import { IMock } from 'moq.ts';
import { MoqProvider } from './MoqProvider';

export class MoqProviderStorage extends VendorMockProviderStorage {
  constructor(createMock: <T>() => IMock<T>) {
    super(new MockProviderStorage(() => new MoqProvider(createMock())));
  }

  findOrCreate<T>(key: ProviderKey): MoqProvider<T> {
    return this.storage.findOrCreate(key) as MoqProvider<T>;
  }

  findMock<T>(key: ProviderKey): IMock<T> {
    return (this.storage.findOrCreate(key) as MoqProvider<T>).mock;
  }
}
