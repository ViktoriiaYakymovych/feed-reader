import React, { Suspense } from "react";
import Loader from "./components/Loader/Loader";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default AppLayout;
