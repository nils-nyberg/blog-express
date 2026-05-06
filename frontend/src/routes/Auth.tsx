import { useState } from "react";
import { useTranslation } from "react-i18next";

function Auth() {
  const [view, setView] = useState<"login" | "register">("login");
  const [loginColor, setLoginColor] = useState<string>("#d9d9d9");
  const [registerColor, setRegisterColor] = useState<string>("#b7b7b7");

  const { t } = useTranslation();

  return (
    <>
      <section className="auth-section">
        <div className="auth-section__content">
          <div className="view">
            <h2
              className="view__login"
              style={{ backgroundColor: loginColor }}
              onClick={() => {
                setView("login");
                setLoginColor("#d9d9d9");
                setRegisterColor("#b7b7b7");
              }}
            >
              {t("auth.view.login")}
            </h2>
            <h2
              className="view__register"
              style={{ backgroundColor: registerColor }}
              onClick={() => {
                setView("register");
                setLoginColor("#b7b7b7");
                setRegisterColor("#d9d9d9");
              }}
            >
              {t("auth.view.register")}
            </h2>
          </div>
          <form className="form">
            {view === "login" ? (
              <>
                <div>
                  <label>{t("auth.form.username")}</label>
                  <input className="form__text-input" type="text" />
                </div>
                <div>
                  <label>{t("auth.form.password")}</label>
                  <input className="form__text-input" type="password" />
                </div>
                <input
                  className="form__submit"
                  type="submit"
                  value={t("auth.form.submit__login")}
                />
              </>
            ) : (
              <>
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
                  <label>{t("auth.form.repeat-password")}</label>
                  <input className="form__text-input" type="password" />
                </div>
                <input
                  className="form__submit"
                  type="submit"
                  value={t("auth.form.submit__register")}
                />
              </>
            )}
          </form>
        </div>
      </section>
    </>
  );
}

export default Auth;
