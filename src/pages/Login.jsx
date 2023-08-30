const Login = () => {
  return (
    <div>
      <form>
        <label htmlFor="email">Email</label>
        <input type="text" id="email" />
        <label htmlFor="password">Password</label>
        <input type="text" id="password" />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default Login;
