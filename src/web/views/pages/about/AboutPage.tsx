import React, { FunctionComponent, useEffect } from 'react';
import { useDependency } from 'react-clean-reactive-architecture';
import { ILogger, ILoggerKey } from '../../../../application';
import { IScopeContext, IScopeContextKey } from 'ts-ioc-container';

export const AboutPage: FunctionComponent = () => {
  const logger = useDependency<ILogger>(ILoggerKey);
  const context = useDependency<IScopeContext<string>>(IScopeContextKey);
  useEffect(() => {
    logger.log(context.getValue());
  });
  return (
    <div>
      <a href="#">Home</a>
      sssdff
    </div>
  );
};
