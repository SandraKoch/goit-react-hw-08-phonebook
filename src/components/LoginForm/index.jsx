export const LoginForm = () => {
  const handleSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;

    console.log({
      email: form.elements.email.value,
      password: form.elements.password.value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">
        Email
        <input type="text" id="email" name="email" />
      </label>

      <label htmlFor="password">
        Password
        <input type="text" id="password" name="password" />
      </label>

      <button type="submit">Log In</button>
    </form>
  );
};
