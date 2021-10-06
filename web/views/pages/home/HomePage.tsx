import React, { FunctionComponent, useEffect } from 'react';
import { TodoList } from './TodoList';
import { ILogger, ILoggerKey } from '../../../../application';
import { useDependency } from 'react-ts-ioc-container';
import { IScopeContextKey } from '../../../core/react-ts-ioc-container/IScopeContextKey';

export const HomePage: FunctionComponent = () => {
  const logger = useDependency<ILogger>(ILoggerKey);
  const context = useDependency<string>(IScopeContextKey);
  useEffect(() => {
    logger.log(context);
  });
  return (
    <div>
      <div className="mb-4">
        <a href="#about">About</a>
      </div>
      <TodoList />
    </div>
  );
};
