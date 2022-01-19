const Signup = () => {
  return (
    <div className="form-content-right">
      <form className="form">
        <h1>Signup here</h1>
        <div className="form-inputs">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            id="username"
            type="text"
            name="username"
            placeholder="Enter your username"
            className="form-input"
          />
        </div>
        <div className="form-inputs">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            id="email"
            type="text"
            name="email"
            placeholder="Enter your email"
            className="form-input"
          />
        </div>
        <div className="form-inputs">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            id="password"
            type="text"
            name="password"
            placeholder="Enter your password"
            className="form-input"
          />
        </div>
        <div className="form-inputs">
          <label htmlFor="password2" className="form-label">
            Confirm password
          </label>
          <input
            id="password2"
            type="text"
            name="password2"
            placeholder="Confirm your password"
            className="form-input"
          />
        </div>
        <button className="form-input-btn" type="submit">
          Sign up
        </button>
        <span className="form-input-login">Already have an account?</span>
      </form>
    </div>
  );
};

export default Signup;
