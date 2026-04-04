import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <h1>Hello Layout!</h1>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
