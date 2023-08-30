const Register = () => {
  return (
    <div>
      <h3>Create your Phonebook account</h3>
      <form>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" placeholder="..." />
        <label htmlFor="email">Email address</label>
        <input type="text" id="email" placeholder="..." />
        <label htmlFor="password">Password</label>
        <input type="text" id="password" placeholder="..." />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
