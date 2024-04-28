import { Status } from '../../components/StatusLabel';
import CompanyRow from '../../components/company-row';
import CompanyTable from '../../components/company-table';

type Props = {};

const Page = (props: Props) => {
  return (
    <>
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
