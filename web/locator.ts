import { IServiceLocator } from 'ts-ioc-container';
import { createLocator as createApplicationLocator } from '../application';
import { prodEnv } from './env/prodEnv';
import { devEnv } from './env/devEnv';
import { ArgumentOutOfRangeError } from '../core/errors/ArgumentOutOfRangeError';

export type EnvType = 'development' | 'production';

export function createLocator(env: EnvType): IServiceLocator {
  let locator: IServiceLocator = createApplicationLocator();

  switch (env) {
    case 'development':
      locator = devEnv(locator);
      break;

    case 'production':
      locator = prodEnv(locator);
      break;

    default:
      throw new ArgumentOutOfRangeError(env);
  }

  return locator;
}
