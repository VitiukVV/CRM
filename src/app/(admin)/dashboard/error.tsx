'use client';

import Button from '@/app/components/Button';
import React from 'react';

interface Props {
  error: Error;
  reset: () => void;
}

const ErrorComponent = ({ error, reset }: Props) => {
  return (
    <div>
      <p>{`Something went wrong. ${error.message}`}</p>
      <Button onClick={() => reset()}>Try again</Button>
    </div>
  );
};

export default ErrorComponent;
