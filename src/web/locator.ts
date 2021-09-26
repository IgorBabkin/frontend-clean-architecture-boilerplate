import { IServiceLocator } from 'ts-ioc-container';
import { createLocatorBuilder } from '../application';
import { prodEnv } from './env/prodEnv';
import { devEnv } from './env/devEnv';
import { ArgumentOutOfRangeError } from '../core/errors/ArgumentOutOfRangeError';

export type EnvType = 'development' | 'production';

export function createLocator(env: EnvType): IServiceLocator {
  let locator: IServiceLocator = createLocatorBuilder().build();

  switch (env) {
    case 'development':
      locator = prodEnv(locator);
      break;

    case 'production':
      locator = devEnv(locator);
      break;

    default:
      throw new ArgumentOutOfRangeError(env);
  }

  return locator;
}
