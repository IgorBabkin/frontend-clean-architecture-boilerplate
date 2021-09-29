import 'reflect-metadata';
import ReactDOM from 'react-dom';
import React from 'react';
import { Application } from './views/Application';
import { LocatorAdapter } from './core/react-ts-ioc-container/LocatorAdapter';
import { createLocator, EnvType } from './locator';
import { LocatorContext } from 'react-ts-ioc-container';

const locator = createLocator(process.env.NODE_ENV as EnvType);

ReactDOM.render(
  <LocatorContext.Provider value={new LocatorAdapter(locator)}>
    <Application />
  </LocatorContext.Provider>,
  document.getElementsByTagName('main')[0],
);
