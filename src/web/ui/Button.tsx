import React, { FC } from 'react';
import './Button.scss';

export const Button: FC<{ onClick: () => void }> = ({ children, onClick }) => {
  return (
    <button type="submit" className="hey btn btn-primary mb-3" onClick={onClick}>
      {children}
    </button>
  );
};
