'use client';

import React from 'react';

type Props = {
  children?: React.ReactNode;
};

const ClientComponent = ({ children }: Props) => {
  console.log('Client component');
  return (
    <div>
      <span>Client component</span>
      {children}
    </div>
  );
};

export default ClientComponent;
