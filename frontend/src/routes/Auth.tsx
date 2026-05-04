import { useEffect, useState } from "react";

function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [loginColor, setLoginColor] = useState("#d9d9d9");
  const [registerColor, setRegisterColor] = useState("#b7b7b7");

  useEffect(() => {
    if (isLogin) {
      setLoginColor("#d9d9d9");
      setRegisterColor("#b7b7b7");
    } else {
      setLoginColor("#b7b7b7");
      setRegisterColor("#d9d9d9");
    }
  }, [isLogin]);

  return (
    <>
      <section className="auth-section">
        <div className="view">
          <h2
            style={{ backgroundColor: loginColor }}
            onClick={() => setIsLogin(true)}
          >
            Logga in
          </h2>
          <h2
            style={{ backgroundColor: registerColor }}
            onClick={() => setIsLogin(false)}
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
              <input className="form__submit" type="submit" value="Logga in" />
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
      </section>
    </>
  );
}

export default Auth;
