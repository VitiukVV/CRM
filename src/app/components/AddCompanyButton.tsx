'use client';

import { useState } from 'react';
// import Button from './Button';
import dynamic from 'next/dynamic';
import Button from './Button';
const CompanyFormModal = dynamic(() => import('./CompanyFormModal'), {
  ssr: false,
});

const AddCompanyButton = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <Button onClick={() => setShow(true)}>Add company</Button>
      <CompanyFormModal
        onSubmit={console.log}
        onClose={() => setShow(false)}
        show={show}
      />
    </>
  );
};

export default AddCompanyButton;
