'use client';

import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import Button from './Button';
const CompanyFormModal = dynamic(() => import('./CompanyFormModal'), {
  ssr: false,
});

const AddCompanyButton = () => {
  const router = useRouter();
  return (
    <>
      <Button onClick={() => router.push('/companies/new', { scroll: false })}>
      Add company
    </Button>
    </>
  );
};

export default AddCompanyButton;
