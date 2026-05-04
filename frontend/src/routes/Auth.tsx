function Auth() {
  return (
    <>
      <section>
        <div className="view">
          <h2>Logga in</h2>
          <h2>Registrera dig</h2>
        </div>
        <form className="form">
          <div>
            <label>Användarnamn:</label>
            <input className="form__text-input" type="text" />
          </div>
          <div>
            <label>Lösenord:</label>
            <input className="form__text-input" type="text" />
          </div>
          <input className="form__submit" type="submit" value="Logga in" />
        </form>
      </section>
    </>
  );
}

export default Auth;
