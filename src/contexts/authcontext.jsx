import {
  createContext,
  useState,
  useEffect
} from "react";

export const AuthContext =
  createContext();

export function AuthProvider({
  children
}) {

  const [usuario, setUsuario] =
    useState(null);

  function login(nome) {

    const usuarioFake = {
      nome: nome
    };

    setUsuario(usuarioFake);
  }

  function logout() {
    setUsuario(null);
  }

  useEffect(() => {

    const usuarioSalvo =
      localStorage.getItem("usuario");

    if (usuarioSalvo) {

      setUsuario(
        JSON.parse(usuarioSalvo)
      );

    }

  }, []);

  useEffect(() => {

    localStorage.setItem(
      "usuario",
      JSON.stringify(usuario)
    );

  }, [usuario]);

  return (

    <AuthContext.Provider
      value={{
        usuario,
        login,
        logout
      }}
    >

      {children}

    </AuthContext.Provider>

  );
}