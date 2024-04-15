'use client';

import Header from '@/app/components/header';
import { notFound } from 'next/navigation';
import { useEffect } from 'react';

interface Props {
  params: { id: string };
}

const Page = ({ params }: Props) => {
  useEffect(() => {
    const id = Number.parseInt(params.id);
    if (Number.isNaN(id)) {
      notFound();
    }
  }, [params.id]);

  return (
    <>
      <Header>Companies ({params.id})</Header>
      {/* <p>{new Date().toTimeString()}</p> */}
    </>
  );
};

export default Page;
