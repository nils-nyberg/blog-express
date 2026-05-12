import { Activity, useState, type HTMLAttributes } from "react";
import { useTranslation } from "react-i18next";

type Props = {
  className: string;
  children: string;
} & HTMLAttributes<HTMLElement>;

function ViewToggle({ className, children, ...props }: Props) {
  return (
    <h2 className={className} {...props}>
      {children}
    </h2>
  );
}

function Auth() {
  const [view, setView] = useState<"login" | "register">("login");

  const { t } = useTranslation();

  return (
    <>
      <section className="auth-section">
        <div className="auth-section__content">
          <div className="view">
            <ViewToggle
              className={`view__login ${view === "login" ? "active" : ""}`}
              onClick={() => {
                setView("login");
              }}
            >
              {t("auth.view.login")}
            </ViewToggle>
            <ViewToggle
              className={`view__register ${view === "register" ? "active" : ""}`}
              onClick={() => {
                setView("register");
              }}
            >
              {t("auth.view.register")}
            </ViewToggle>
          </div>
          <form className="form">
            <Activity mode={view === "login" ? "visible" : "hidden"}>
              <div key="login">
                <div>
                  <label>{t("auth.form.username")}</label>
                  <input className="form__text-input" type="text" />
                </div>
                <div>
                  <label>{t("auth.form.password")}</label>
                  <input className="form__text-input" type="password" />
                </div>
              </div>
              <input
                className="form__submit"
                type="submit"
                value={t("auth.form.submitLogin")}
              />
            </Activity>
            <Activity mode={view === "register" ? "visible" : "hidden"}>
              <div key="register">
                <div>
                  <label>{t("auth.form.email")}</label>
                  <input className="form__text-input" type="email" />
                </div>
                <div>
                  <label>{t("auth.form.username")}</label>
                  <input className="form__text-input" type="text" />
                </div>
                <div>
                  <label>{t("auth.form.password")}</label>
                  <input className="form__text-input" type="password" />
                </div>
                <div>
                  <label>{t("auth.form.repeatPassword")}</label>
                  <input className="form__text-input" type="password" />
                </div>
              </div>
              <input
                className="form__submit"
                type="submit"
                value={t("auth.form.submitRegister")}
              />
            </Activity>
          </form>
        </div>
      </section>
    </>
  );
}

export default Auth;
