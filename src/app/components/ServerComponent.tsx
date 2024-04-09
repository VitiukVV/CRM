import React from 'react';

type Props = {
  children?: React.ReactNode;
};

const ServerComponent = ({ children }: Props) => {
  console.log('Server component');
  return (
    <div>
      <span>Server component</span>
      {children}
    </div>
  );
};

export default ServerComponent;
