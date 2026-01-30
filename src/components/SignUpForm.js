import { useState } from "react";
import "../assets/signup.css";
import { validateEmail } from "../utils";

const PasswordErrorMessage = () => {
  return (
    <p className="FieldError">Password should have at least 8 characters</p>
  );
};

function SignUpform() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState({
    value: "",
    isTouched: false,
  });
  const [role, setRole] = useState("role");
  // Use Onchange events for fields

  const getIsFormValid = () => {
    // Implement this function
    return (
      firstName &&
      validateEmail(email) &&
      password.value.length >= 8 &&
      role !== "role"
    );
  };

  const clearForm = () => {
    // Implement this function
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword({
      value: "",
      isTouched: false,
    });
    setRole("role");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Account created!");
    clearForm();
  };

  return (
    <div className="signupForm">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <h2>Sign Up</h2>
          <div className="Field">
            <label>
              First name <sup>*</sup>
            </label>
            <input 
            type="text"
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
            value={firstName}
            placeholder="First name"
             />
          </div>
          <div className="Field">
            <label>Last name</label>
            <input 
            type="text"
            onChange={(e) => {
              setLastName(e.target.value);
            }}
            value={lastName}
            placeholder="Last name"
             />
          </div>
          <div className="Field">
            <label>
              Email address <sup>*</sup>
            </label>
            <input 
            type="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
            placeholder="Email address"
             />
          </div>
          <div className="Field">
            <label>
              Password <sup>*</sup>
            </label>
            <input
            onChange={(e) => {
              setPassword({...password, value: e.target.value});
            }}
            onBlur={(e) => {
              setPassword({...password, isTouched: true});
            }}
            type="password"
            placeholder="Password"
             />
            {password.isTouched && password.value.length < 8 ? (
              <PasswordErrorMessage />
            ) : null}
          </div>
          <div className="Field">
            <label>
              Role <sup>*</sup>
            </label>
            <select value={role} onChange={(e) => {setRole(e.target.value)}}>
              <option value="role">Role</option>
              <option value="individual">Individual</option>
              <option value="business">Business</option>
            </select>
          </div>
          <button type="submit" disabled={!getIsFormValid()}>
            Create account
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default SignUpform;
