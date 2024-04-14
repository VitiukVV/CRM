import AddCompanyButton from '../../components/AddCompanyButton';
import { Status } from '../../components/StatusLabel';
import CompanyRow from '../../components/company-row';
import CompanyTable from '../../components/company-table';
import Header from '../../components/header';
import SearchInput from '../../components/search-input';
import Toolbar from '../../components/toolbar';

type Props = {};

const Page = (props: Props) => {
  return (
    <>
      <Header>Companies</Header>
      <Toolbar action={<AddCompanyButton />}>
        <SearchInput />
      </Toolbar>
      <CompanyTable>
        <CompanyRow
          id={1}
          category={'Products'}
          company={'Costco'}
          status={Status.Pending}
          promotion={true}
          country={'USA'}
          joinedDate={'02.19.23'}
        />
      </CompanyTable>
    </>
  );
};

export default Page;
