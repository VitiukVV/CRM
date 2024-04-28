'use client';

import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import Button from './Button';
const CompanyFormModal = dynamic(() => import('./CompanyFormModal'), {
  ssr: false,
});

const AddCompanyButton = () => {
  // const [show, setShow] = useState(false);
  const router = useRouter();
  return (
    <>
      <Button onClick={() => router.push('/companies/new')}>Add company</Button>

      {/* <Button onClick={() => setShow(true)}>Add company</Button> */}
      {/* <CompanyFormModal
        onSubmit={console.log}
        onClose={() => setShow(false)}
        show={show}
      /> */}
    </>
  );
};

export default AddCompanyButton;
