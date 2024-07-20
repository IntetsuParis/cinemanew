import React, { useState } from "react";
import styles from "./Authorization.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useActions } from "../../hooks/useActions";

import Form from "./Form";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const { setUser } = useActions();
  const [error, setError] = useState<string | null>(null);

  const handleLogin = (email: string, password: string) => {
    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);
        setUser({
          email: user.email,
          id: user.uid,
          token: user.refreshToken,
        });
        navigate("/");
      })
      .catch((error) => {
        console.error("Ошибка входа:", error);
        setError("Invalid email or password");
      });
  };

  return (
    <div>
      <h1>Login in</h1>
      <Form title="Login in" handleClick={handleLogin} />
      {error && <p className={styles.error}>{error}</p>}

      <h1>
        <p>
          Or
          <Link className={styles.register} to="/signup">
            Register
          </Link>
        </p>
      </h1>
    </div>
  );
};

export default Login;
