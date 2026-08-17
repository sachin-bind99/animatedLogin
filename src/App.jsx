import "./App.css";
import { useState } from "react";

function App() {
  const [isSignup, setIsSignup] = useState(false);



  return (
    <main className="page">
      <div className={`auth-card ${isSignup ? "signup-mode" : ""}`}>
        <section className="form-panel">

          <h1>Login</h1>

          <div className="input-box">
            <input
              type="text"
              placeholder="Username"
            />
          </div>

          <div className="input-box">
            <input
              type="password"
              placeholder="Password"
            />
          </div>

          <button className="submit-btn">
            Login
          </button>

          <p className="switch-text">
            Don't have an account?{" "}
            <button
              className="link-btn"
              onClick={() => setIsSignup(true)}>

              Sign Up
            </button>
          </p>

        </section>



        <section className="signup-panel">

          <h1>Sign Up</h1>

          <div className="input-box">
            <input
              type="text"
              placeholder="Username"
            />
          </div>

          <div className="input-box">
            <input
              type="email"
              placeholder="Email"
            />
          </div>

          <div className="input-box">
            <input
              type="password"
              placeholder="Password"
            />
          </div>

          <button className="submit-btn">
            Sign Up
          </button>
          <p className="switch-text">
            Already have an account?{" "}
            <button
              className="link-btn"
              onClick={() => setIsSignup(false)}
            >
              Login
            </button>
          </p>

        </section>


        <section className="welcome-panel">

          <div className="welcome-content">
            <h2>WELCOME<br />BACK!</h2>

            <p>
              Login to continue and access
              your account.
            </p>
          </div>

        </section>
      </div>
    </main>
  );
}

export default App;








