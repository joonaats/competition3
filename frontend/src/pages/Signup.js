import { useSignup } from "../hooks/useSignup";
import { useField } from "../hooks/useField";

const Signup = () => {
  const username = useField("username");
  const email = useField("email");
  const password = useField("password");
  const date_of_birth = useField("date_of_birth");
  const phone_number = useField("phone_number");
  // Add necessary code here
  const { signup, error, isLoading } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(username.value, email.value, password.value, date_of_birth.value, phone_number.value); // make necessary modification
  };

  return (
    <form className="signup" onSubmit={handleSubmit}>
      <h3>Sign Up</h3>
      <label>Username:</label>
      <input {...username} />
      <label>Email address:</label>
      <input {...email} />
      <label>Password:</label>
      <input {...password} />
      <label>Date of birth:</label>
      <input {...date_of_birth} />
      <label>Phone number:</label>
      <input {...phone_number} />
      <button disabled={isLoading}>Sign up</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default Signup;