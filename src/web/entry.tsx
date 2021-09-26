import 'reflect-metadata';
import { render } from 'react-dom';
import React from 'react';
import { Application } from './views/Application';
import { LocatorContext } from 'react-clean-reactive-architecture';
import { LocatorAdapter } from './core/LocatorAdapter';
import { createLocator, EnvType } from './locator';

const locator = createLocator(process.env.NODE_ENV as EnvType);

render(
  <LocatorContext.Provider value={new LocatorAdapter(locator)}>
    <Application />
  </LocatorContext.Provider>,
  document.getElementById('root'),
);
