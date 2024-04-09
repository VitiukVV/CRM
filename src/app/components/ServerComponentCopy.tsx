import { headers } from 'next/headers';
import React from 'react';

type Props = {
  children?: React.ReactNode;
};

const ServerComponentCopy = ({ children }: Props) => {
  console.log('Server component copy');
  console.log(headers());
  return (
    <div>
      <span>Server component copy</span>
      {children}
    </div>
  );
};

export default ServerComponentCopy;
