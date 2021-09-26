import 'reflect-metadata';
import './main.scss';
import { render } from 'react-dom';
import React from 'react';
import { Application } from './Application';
import { LocatorContext } from 'react-clean-reactive-architecture';
import { LocatorAdapter } from './core/LocatorAdapter';
import { devEnv } from './env/devEnv';
import { IocLocatorBuilder, IServiceLocator } from 'ts-ioc-container';
import { injectMetadataCollector } from '../application/metadata';
import { LocatorHook } from '../application/LocatorHook';
import { prodEnv } from './env/prodEnv';

let locator: IServiceLocator = new IocLocatorBuilder(injectMetadataCollector)
  .withInjectorHook(new LocatorHook())
  .build();

if (process.env.NODE_ENV === 'production') {
  locator = prodEnv(locator);
} else {
  locator = devEnv(locator);
}

render(
  <LocatorContext.Provider value={new LocatorAdapter(locator)}>
    <Application />
  </LocatorContext.Provider>,
  document.getElementById('root'),
);
