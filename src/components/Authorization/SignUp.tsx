import React from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useActions } from "../../hooks/useActions";
import Form from "./Form";

const SignUp: React.FC = () => {
  const navigate = useNavigate();
  const { setUser } = useActions(); // Вот правильное использование внутри компонента React

  const handleRegister = (email: string, password: string) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);
        setUser({
          email: user.email,
          id: user.uid,
          token: user.refreshToken, // или accessToken, в зависимости от вашего случая
        });
        navigate("/"); // Перенаправляем на главную страницу после успешной регистрации
      })
      .catch((error) => {
        console.error("Ошибка регистрации:", error);
        // Обработка ошибок регистрации
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
