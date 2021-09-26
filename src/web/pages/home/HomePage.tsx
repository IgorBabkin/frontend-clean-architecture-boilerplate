import React, { FunctionComponent, useEffect } from 'react';
import { TodoList } from './TodoList';
import { useDependency } from 'react-clean-reactive-architecture';
import { ILogger, ILoggerKey } from '../../../domain/ILogger';
import { IScopeContext, IScopeContextKey } from 'ts-ioc-container';

export const HomePage: FunctionComponent = () => {
  const logger = useDependency<ILogger>(ILoggerKey);
  const context = useDependency<IScopeContext<string>>(IScopeContextKey);
  useEffect(() => {
    logger.log(context.getValue());
  })
  return (
    <div>
      <a href='#about'>About</a>
      <TodoList />
    </div>
  );
};
