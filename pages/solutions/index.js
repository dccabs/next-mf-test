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
      <Header />
      <main>
        <div className="relative isolate overflow-hidden pt-16">
          <DynamicComponent scope="home" module="nav">
            <SecondNav />
          </DynamicComponent>
          <SecondNav />
          <Stats />
        </div>

        <div className="space-y-16 py-16 xl:space-y-20">
          <RecentActivityTable />
          <RecentClients />
        </div>
      </main>
    </Layout>
  );
}
