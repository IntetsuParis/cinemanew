import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { useActions } from "../../hooks/useActions";

const Authorization: React.FC = () => {
  const { isAuth, email } = useSelector((state: RootState) => state.user);
  const { removeUser } = useActions();
  const navigate = useNavigate(); // Хук useNavigate для перенаправления

  const handleLogout = () => {
    removeUser(); // Вызываем функцию removeUser для выхода пользователя
  };

  React.useEffect(() => {
    if (!isAuth) {
      navigate("/login"); // Перенаправляем на страницу /login, если пользователь не аутентифицирован
    }
  }, [isAuth, navigate]);

  if (!isAuth) {
    return null; // заглушка
  }

  return (
    <div>
      <h1>Welcome {email}</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Authorization;
