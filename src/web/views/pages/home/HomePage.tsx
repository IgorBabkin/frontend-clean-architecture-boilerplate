import React, { FunctionComponent, useEffect } from 'react';
import { TodoList } from './TodoList';
import { ILogger, ILoggerKey } from '../../../../application';
import { IScopeContext, IScopeContextKey } from 'ts-ioc-container';
import { useDependency } from 'react-ts-ioc-container';

export const HomePage: FunctionComponent = () => {
  const logger = useDependency<ILogger>(ILoggerKey);
  const context = useDependency<IScopeContext<string>>(IScopeContextKey);
  useEffect(() => {
    logger.log(context.getValue());
  });
  return (
    <div>
      <a href="#about">About</a>
      <TodoList />
    </div>
  );
};