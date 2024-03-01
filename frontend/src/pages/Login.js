import { useLogin } from "../hooks/useLogin";
import { useField } from "../hooks/useField";

const Login = () => {
  const username = useField("username");
  const password = useField("password");
  // Add necessary code here
  const { login, error, isLoading } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username.value, password.value); // make necessary modification
  };

  return (
    <form className="login" onSubmit={handleSubmit}>
      <h3>Login</h3>
      <label>Username:</label>
      <input {...username} />
      <label>Password:</label>
      <input {...password} />
      <button disabled={isLoading}>Login</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default Login;