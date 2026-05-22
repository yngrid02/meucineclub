import {
  useState,
  useContext
} from "react";

import {
  AuthContext
} from "../contexts/AuthContext";

import {
  useNavigate
} from "react-router-dom";

function Login() {

  const [nome, setNome] =
    useState("");

  const { login } =
    useContext(AuthContext);

  const navigate =
    useNavigate();

  function entrar() {

    login(nome);

    navigate("/");
  }

  return (

    <div>

      <h1>Login</h1>

      <input
        type="text"
        placeholder="Digite seu nome"
        value={nome}
        onChange={(e) =>
          setNome(e.target.value)
        }
      />

      <br />
      <br />

      <button onClick={entrar}>
        Entrar
      </button>

    </div>

  );
}

export default Login;