import { Outlet } from "react-router-dom";
import logo from "./assets/logo.png";

function Layout() {
  return (
    <>
      <section>
        <div className="header">
          <img className="header__logo" src={logo} alt="Logo" />
          <h1 className="header__title">The Blog</h1>
          {/* The language icon styling is temporary for future development. */}
          <span className="header__language-icon"></span>
        </div>
      </section>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
