import AddCompanyButton from './components/AddCompanyButton';

export default function Home() {
  return (
    <main>
      <h1 className="text-xl">Home page {new Date().toTimeString()} </h1>
      <AddCompanyButton />
    </main>
  );
}
