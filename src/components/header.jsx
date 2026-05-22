import { Link } from "react-router-dom";

import { useContext } from "react";

import {
  ThemeContext
} from "../contexts/ThemeContext";

import {
  AuthContext
} from "../contexts/AuthContext";

function Header() {

  const {
    tema,
    alternarTema
  } = useContext(ThemeContext);

  const {
    usuario,
    logout
  } = useContext(AuthContext);

  return (

    <nav>

      <Link to="/">Home</Link>

      <br />

      <Link to="/login">Login</Link>

      <br />

      <Link to="/favoritos">
        Favoritos
      </Link>

      <br />
      <br />

      <button onClick={alternarTema}>
        Tema atual: {tema}
      </button>

      <br />
      <br />

      {usuario ? (

        <div>

          <p>
            Bem-vindo, {usuario.nome}
          </p>

          <button onClick={logout}>
            Sair
          </button>

        </div>

      ) : (

        <p>Usuário não logado</p>

      )}

    </nav>
  );
}

export default Header;