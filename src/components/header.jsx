import { Link } from "react-router-dom";

import { useContext } from "react";

import { ThemeContext }
from "../contexts/ThemeContext";

function Header() {

  const { tema, alternarTema } =
    useContext(ThemeContext);

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

    </nav>
  );
}

export default Header;