import { importRemote } from "@module-federation/utilities";
import dynamic from "next/dynamic";
const Index = ({ children, scope, module }) => {
  const url = "http://localhost:3001";

  const DynamicComponentWithNoSSR = dynamic(
    () =>
      importRemote({
        url: `${url}/_next/static/chunks`,
        scope,
        module,
      }).catch((err) => {
        console.error("Failed to load module", err);
        const ErrorComponent = () => (
          <div>An error occurred while loading the module</div>
        );
        ErrorComponent.displayName = "ErrorComponent";
        return ErrorComponent;
      }),
    { ssr: false, loading: () => <>...Loading</> }
  );

  return <>{url ? <DynamicComponentWithNoSSR /> : <>{children}</>}</>;
};

export default Index;
