import { IServiceLocator } from 'ts-ioc-container';
import { createLocatorBuilder } from '../application';
import { prodEnv } from './env/prodEnv';
import { devEnv } from './env/devEnv';

export function createLocator(): IServiceLocator {
  let locator: IServiceLocator = createLocatorBuilder().build();

  if (process.env.NODE_ENV === 'production') {
    locator = prodEnv(locator);
  } else {
    locator = devEnv(locator);
  }

  return locator;
}
