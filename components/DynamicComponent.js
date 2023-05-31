import React, { useState } from "react";
import { importRemote } from "@module-federation/utilities";
import dynamic from "next/dynamic";
const Index = ({ children, scope, module, url = "" }) => {
  const [fallback, setFallback] = useState(false);

  const DynamicComponentWithNoSSR = dynamic(
    () =>
      importRemote({
        url: `${url}/_next/static/chunks`,
        scope,
        module,
      }).catch((err) => {
        console.error("Failed to load module", err);
        setFallback(true);
      }),
    { ssr: false, loading: () => <>...Loading</> }
  );

  return <>{!fallback ? <DynamicComponentWithNoSSR /> : <>{children}</>}</>;
};

export default Index;
