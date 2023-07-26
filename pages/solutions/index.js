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

  const getUrl = (module) => {
    const match = config.find((item) => item.component === module);
    return match.remote_url
  }
  return (
    <Layout>
      <DynamicComponent module="header" scope={getScope('header')} url={getUrl('header')}>
        <Header />
      </DynamicComponent>
      <main>
        <div className="relative isolate overflow-hidden pt-16">
          <DynamicComponent module="secondNav" scope={getScope('secondNav')} url={getUrl('secondNav')}>
            <SecondNav />
          </DynamicComponent>
          <DynamicComponent module="stats" scope={getScope('stats')} url={getUrl('stats')}>
            <Stats />
          </DynamicComponent>
        </div>

        <div className="space-y-16 py-16 xl:space-y-20">
          <DynamicComponent module="recentActivity" scope={getScope('recentActivity')} url={getUrl('recentActivity')}>
            <RecentActivityTable />
          </DynamicComponent>
          <DynamicComponent module="recentClients" scope={getScope('recentClients')} url={getUrl('recentClients')}>
            <RecentClients />
          </DynamicComponent>
        </div>
      </main>
    </Layout>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch('http://localhost:3004/api/getConfig');
  const config = await res.json();
  return { props: { config } };
};
