'use client';

import React, { useState } from 'react';
import Button from './Button';
import dynamic, { noSSR } from 'next/dynamic';
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
