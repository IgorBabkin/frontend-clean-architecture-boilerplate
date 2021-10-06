import React, { FunctionComponent, useEffect } from 'react';
import { ILogger, ILoggerKey } from '../../../../application';
import { Scope, useDependency } from 'react-ts-ioc-container';
import { MyForm } from './MyForm';
import { IScopeContextKey } from '../../../core/react-ts-ioc-container/IScopeContextKey';

export const AboutPage: FunctionComponent = () => {
  const logger = useDependency<ILogger>(ILoggerKey);
  const context = useDependency<string>(IScopeContextKey);
  useEffect(() => {
    logger.log(context);
  });
  return (
    <div>
      <a href="#">Home</a>
      <h1>About us page</h1>
      <Scope>
        <MyForm />
      </Scope>
    </div>
  );
};
