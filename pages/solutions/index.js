import Layout from "/components/Layout";
import Header from "/components/Header";
import SecondNav from "/components/SecondNav";
import Stats from "/components/Stats";
import RecentActivityTable from "/components/RecentActivityTable";
import RecentClients from "/components/RecentClients";
import DynamicComponent from "/components/DynamicComponent";

export default function Solutions() {
  return (
    <Layout>
      <DynamicComponent module="header" scope="remote1">
        <Header />
      </DynamicComponent>
      <main>
        <div className="relative isolate overflow-hidden pt-16">
          <DynamicComponent module="secondNav" scope="remote1">
            <SecondNav />
          </DynamicComponent>
          <DynamicComponent module="stats" scope="remote1">
            <Stats />
          </DynamicComponent>
        </div>

        <div className="space-y-16 py-16 xl:space-y-20">
          <DynamicComponent module="recentActivity" scope="remote1">
            <RecentActivityTable />
          </DynamicComponent>
          <DynamicComponent module="recentClients" scope="remote1">
            <RecentClients />
          </DynamicComponent>
        </div>
      </main>
    </Layout>
  );
}
