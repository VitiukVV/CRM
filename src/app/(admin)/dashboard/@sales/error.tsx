'use client';

import React from 'react';

type Props = {
  error: Error;
};

const Error = (props: Props) => {
  return <div>Unxpected error inside slot sales </div>;
};

export default Error;
