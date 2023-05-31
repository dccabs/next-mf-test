import Layout from "/components/Layout";
import Header from "/components/Header";
import SecondNav from "/components/SecondNav";
import Stats from "/components/Stats";
import RecentActivityTable from "/components/RecentActivityTable";
import RecentClients from "/components/RecentClients";
import DynamicComponent from "/components/DynamicComponent";

export default function Solutions(props) {
  const config = props.config;
  const getScope = (module) => {
    const match = config.find((item) => item.component === module);
    return match.remote_name
  }
  return (
    <Layout>
      <DynamicComponent module="header" scope={getScope('header')}>
        <Header />
      </DynamicComponent>
      <main>
        <div className="relative isolate overflow-hidden pt-16">
          <DynamicComponent module="secondNav" scope={getScope('secondNav')}>
            <SecondNav />
          </DynamicComponent>
          <DynamicComponent module="stats" scope={getScope('stats')}>
            <Stats />
          </DynamicComponent>
        </div>

        <div className="space-y-16 py-16 xl:space-y-20">
          <DynamicComponent module="recentActivity" scope={getScope('recentActivity')}>
            <RecentActivityTable />
          </DynamicComponent>
          <DynamicComponent module="recentClients" scope={getScope('recentClients')}>
            <RecentClients />
          </DynamicComponent>
        </div>
      </main>
    </Layout>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch('https://next-mf-api.vercel.app/api/getConfig');
  const config = await res.json();
  return { props: { config } };
};
