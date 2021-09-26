import 'reflect-metadata';
import './ui/main.scss';
import { render } from 'react-dom';
import React from 'react';
import { Application } from './Application';
import { LocatorContext } from 'react-clean-reactive-architecture';
import { LocatorAdapter } from './core/LocatorAdapter';
import { createLocator } from './locator';

const locator = createLocator();

render(
  <LocatorContext.Provider value={new LocatorAdapter(locator)}>
    <Application />
  </LocatorContext.Provider>,
  document.getElementById('root'),
);
