import React from 'react';
import { FC } from 'react';
import './Panel.scss';

export const Panel: FC = ({ children }) => {
  return <div className="panel">{children}</div>;
};
