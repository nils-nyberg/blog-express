import { Outlet, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import logo from "./assets/logo.png";
import useWindowDimensions from "./utils/hooks/useWindowDimensions";

function Layout() {
  const { t, i18n } = useTranslation();
  const { pathname } = useLocation();
  const { width } = useWindowDimensions();

  const isPageAuth = pathname === "/auth";

  const handleLanguageChange = () => {
    i18n.changeLanguage(t("header.changeLanguage").toLowerCase());
  };

  return (
    <>
      <header>
        <div className="header">
          <img className="header__logo" src={logo} alt="Logo" />
          {(width <= 1400 || isPageAuth) && (
            <h1 className="header__title">The Blog</h1>
          )}
          <div className="header__navbar">
            <a className="active">{t("header.navigation.blog")}</a>
            <a>{t("header.navigation.friends")}</a>
            <a>{t("header.navigation.profile")}</a>
          </div>
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
