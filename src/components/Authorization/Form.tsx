import { useState } from "react";

import React from "react";
interface FormProps {
  title: string;
  handleClick: (email: string, password: string) => void;
}
const Form: React.FC<FormProps> = ({ title, handleClick }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <form>
        {" "}
        <input
          type="text"
          placeholder="Type email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Type Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={() => handleClick(email, password)}>{title}</button>
      </form>
    </div>
  );
};

export default Form;
