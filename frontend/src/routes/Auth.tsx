import { useState } from "react";

function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [loginColor, setLoginColor] = useState("#d9d9d9");
  const [registerColor, setRegisterColor] = useState("#b7b7b7");

  return (
    <>
      <section className="auth-section">
        <div className="auth-section__content">
          <div className="view">
            <h2
              className="view__login"
              style={{ backgroundColor: loginColor }}
              onClick={() => {
                setIsLogin(true);
                setLoginColor("#d9d9d9");
                setRegisterColor("#b7b7b7");
              }}
            >
              Logga in
            </h2>
            <h2
              className="view__register"
              style={{ backgroundColor: registerColor }}
              onClick={() => {
                setIsLogin(false);
                setLoginColor("#b7b7b7");
                setRegisterColor("#d9d9d9");
              }}
            >
              Registrera dig
            </h2>
          </div>
          <form className="form">
            {isLogin ? (
              <>
                <div>
                  <label>Användarnamn:</label>
                  <input className="form__text-input" type="text" />
                </div>
                <div>
                  <label>Lösenord:</label>
                  <input className="form__text-input" type="password" />
                </div>
                <input
                  className="form__submit"
                  type="submit"
                  value="Logga in"
                />
              </>
            ) : (
              <>
                <div>
                  <label>E-mail:</label>
                  <input className="form__text-input" type="email" />
                </div>
                <div>
                  <label>Användarnamn:</label>
                  <input className="form__text-input" type="text" />
                </div>
                <div>
                  <label>Lösenord:</label>
                  <input className="form__text-input" type="password" />
                </div>
                <div>
                  <label>Upprepa lösenord:</label>
                  <input className="form__text-input" type="password" />
                </div>
                <input
                  className="form__submit"
                  type="submit"
                  value="Registrera"
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
