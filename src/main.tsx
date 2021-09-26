import 'reflect-metadata';
import { render } from 'react-dom';
import React from 'react';
import { Application } from './presenters/Application';
import { createLocator } from './di/createLocator';
import { LocatorContext } from 'react-clean-reactive-architecture';
import { LocatorAdapter } from './presenters/core/LocatorAdapter';

const locator = createLocator();
render(
  <LocatorContext.Provider value={new LocatorAdapter(locator)}>
    <Application />
  </LocatorContext.Provider>,
  document.getElementById('root'),
);
