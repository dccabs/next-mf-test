import React, { useState, useEffect } from "react";
import { importRemote } from "@module-federation/utilities";
import dynamic from "next/dynamic";

const Index = () => {
  const DynamicComponentWithNoSSR = dynamic(
    () =>
      importRemote({
        url: "http://localhost:3001/_next/static/chunks",
        scope: "home",
        module: "nav",
      }),
    { ssr: false }
  );

  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <div>This is a test page</div>
      <DynamicComponentWithNoSSR />
    </>
  );
};

export default Index;
