import { Link, Outlet, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import logo from "./assets/logo.png";
import useWindowDimensions from "./utils/hooks/useWindowDimensions";

type Props = {
  href: string;
  children: string;
};

function CustomLink({ href, children }: Props) {
  const { pathname } = useLocation();

  return (
    <Link to={href} className={pathname === href ? "active" : ""}>
      {children}
    </Link>
  );
}

function Layout() {
  const { t, i18n } = useTranslation();
  const { pathname } = useLocation();
  const { width } = useWindowDimensions();

  const isPageAuth = pathname === "/auth";

  const handleLanguageChange = () => {
    i18n
      .changeLanguage(t("header.changeLanguage").toLowerCase())
      .catch(console.error);
  };

  return (
    <>
      <header>
        <div className="header">
          <img className="header__logo" src={logo} alt="Logo" />
          {(width <= 900 || isPageAuth) && (
            <h1 className="header__title">The Blog</h1>
          )}
          {!isPageAuth && (
            <div className="header__navbar">
              <CustomLink href="/">{t("header.navigation.blog")}</CustomLink>
              <CustomLink href="/friends">
                {t("header.navigation.friends")}
              </CustomLink>
              <CustomLink href="/profile">
                {t("header.navigation.profile")}
              </CustomLink>
            </div>
          )}
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
