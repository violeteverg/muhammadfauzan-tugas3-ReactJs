import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/slices/AuthSlices";
import { useNavigate } from "react-router-dom";

import Button from "../components/Button";
import PageNav from "../components/PageNav";
import styles from "./Login.module.css";

function Login() {
  const dispatch = useDispatch();
  const isAuthenticatedRedux = useSelector(
    (state) => state.auth.isAuthenticated
  );
  const navigate = useNavigate();

  const [email, setEmail] = useState("ojan56@gmail.com");
  const [password, setPassword] = useState("123456");

  function handleSubmit(e) {
    e.preventDefault();

    if (email && password) {
      dispatch(login({ email, password }));
    }
  }

  useEffect(() => {
    if (isAuthenticatedRedux) {
      console.log("Redirecting to /app...");
      navigate("/app", { replace: true });
    }
  }, [isAuthenticatedRedux, navigate]);

  return (
    <main className={styles.login}>
      <PageNav />

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.row}>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <div>
          <Button type="primary">Login</Button>
        </div>
      </form>
    </main>
  );
}

export default Login;
