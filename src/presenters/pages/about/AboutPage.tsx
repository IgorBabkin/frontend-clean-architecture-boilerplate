import React, { FunctionComponent } from 'react';
import { useDependency } from 'react-clean-reactive-architecture';
import { ILogger, ILoggerKey } from '../../../domain/ILogger';

export const AboutPage: FunctionComponent = () => {
  const logger = useDependency<ILogger>(ILoggerKey);
  return (
    <div>
      <a href='#'>Home</a>
      sssdff
    </div>
  );
};
