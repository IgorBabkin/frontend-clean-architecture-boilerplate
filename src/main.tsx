import 'reflect-metadata';
import './main.scss';
import { render } from 'react-dom';
import React from 'react';
import { Application } from 'presenters/Application';
import { createLocator } from './di/createLocator';
import { LocatorContext } from 'react-clean-reactive-architecture';

const locator = createLocator();
render(
  <LocatorContext.Provider value={locator}>
    <Application />
  </LocatorContext.Provider>,
  document.getElementById('root'),
);
