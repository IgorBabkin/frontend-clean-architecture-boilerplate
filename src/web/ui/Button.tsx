import React, { FC } from 'react';

export const Button: FC<{ onClick: () => void }> = ({ children, onClick }) => {
  return (
    <button type="submit" className="btn btn-primary mb-3" onClick={onClick}>
      {children}
    </button>
  );
};
