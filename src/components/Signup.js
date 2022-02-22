import React from "react";

const Signup = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");

  const checkFields = () => {
    if (!username) {
      setError("Please enter a username");
    } else if (!password) {
      setError("Please enter a password");
    } else {
      setError(`Welcome, ${username}!`);
    }
  };

  return (
    <div>
      <h4>Signup</h4>
      <label htmlFor="username">Username</label>

      <input
        name="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <label htmlFor="password">Password</label>
      <input
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={checkFields}>Create Account</button>
      <br />
      {error && <h1>{error}</h1>}
    </div>
  );
};

export default Signup;
