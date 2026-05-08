import { Outlet, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import logo from "./assets/logo.png";

function Layout() {
  const { t, i18n } = useTranslation();
  const { pathname } = useLocation();

  const isPageAuth = pathname === "/auth";

  const handleLanguageChange = () => {
    i18n.changeLanguage(t("header.changeLanguage").toLowerCase());
  };

  return (
    <>
      <header>
        <div className="header">
          <img className="header__logo" src={logo} alt="Logo" />
          {isPageAuth && <h1 className="header__title">The Blog</h1>}
          <button
            className="header__language-button"
            onClick={handleLanguageChange}
          >
            {t("header.changeLanguage")}
          </button>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
