export const LoginForm = () => {
  return (
    <form>
      <label htmlFor="email">Email</label>
      <input type="text" id="email" />
      <label htmlFor="password">Password</label>
      <input type="text" id="password" />
      <button type="submit">Log In</button>
    </form>
  );
};
