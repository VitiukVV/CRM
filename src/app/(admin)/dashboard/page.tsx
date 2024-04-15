import MagicButton from '@/app/components/magic-button';
import React from 'react';

type Props = {};

const Page = (props: Props) => {
  return (
    <main>
      <h1 className="text-xl">Dashboard Page</h1>
      <MagicButton />
    </main>
  );
};

export default Page;
