import Header from '@/app/components/header';

type Props = {
  params: { id: string[] };
};

const Page = ({ params }: Props) => {
  return (
    <>
      <Header>Companies ({String(params.id)})</Header>
      <p>{new Date().toTimeString()}</p>
    </>
  );
};

export default Page;
