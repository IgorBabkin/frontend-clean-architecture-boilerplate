import 'reflect-metadata';
import { render } from 'react-dom';
import React from 'react';
import { Application } from './presenters/Application';
import { LocatorContext } from 'react-clean-reactive-architecture';
import { LocatorAdapter } from './presenters/core/LocatorAdapter';
import { DevServiceLocator } from './di/DevServiceLocator';

const locator = new DevServiceLocator();
locator.registerAllProviders();

render(
  <LocatorContext.Provider value={new LocatorAdapter(locator)}>
    <Application />
  </LocatorContext.Provider>,
  document.getElementById('root'),
);
