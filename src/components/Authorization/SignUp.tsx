import React from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useActions } from "../../hooks/useActions";
import Form from "./Form";

const SignUp: React.FC = () => {
  const navigate = useNavigate();
  const { setUser } = useActions();

  const handleRegister = (email: string, password: string) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
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
        console.error("Ошибка регистрации:", error);
      });
  };

  return (
    <div>
      <h1>Registration</h1>
      <Form title="register" handleClick={handleRegister} />
    </div>
  );
};

export default SignUp;
