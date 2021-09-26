import { IServiceLocator, MockProvider } from 'ts-ioc-container';
import { GetPropertyInteraction, IMock, It, Mock, NamedMethodInteraction, SetPropertyInteraction } from 'moq.ts';

export class MoqProvider<T> extends MockProvider<T> {
  constructor(public mock: IMock<T>) {
    super();
  }

  resolve(locator: IServiceLocator, ...args: any[]): T {
    return this.mock.object();
  }
}

export function createMock<T>(): IMock<T> {
  const mock = new Mock<T>()
    .setup(() => It.IsAny())
    .callback((interaction) => {
      const source: { __map: any } = mock as any;
      source.__map = source.__map || {};
      if (interaction instanceof GetPropertyInteraction) {
        if (source.__map[interaction.name] === undefined) {
          source.__map[interaction.name] = (...args: any[]) => {
            mock.tracker.add(new NamedMethodInteraction(interaction.name, args));
          };
        }
        return source.__map[interaction.name];
      }
      if (interaction instanceof SetPropertyInteraction) {
        return true;
      }
    });
  return mock;
}