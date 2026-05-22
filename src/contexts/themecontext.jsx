import {
  createContext,
  useState,
  useEffect
} from "react";

export const ThemeContext =
  createContext();

export function ThemeProvider({
  children
}) {

  const [tema, setTema] =
    useState("claro");

  function alternarTema() {

    if (tema === "claro") {
      setTema("escuro");
    } else {
      setTema("claro");
    }

  }

  useEffect(() => {

    document.body.style.backgroundColor =
      tema === "claro"
        ? "white"
        : "#222";

    document.body.style.color =
      tema === "claro"
        ? "black"
        : "white";

  }, [tema]);

  return (

    <ThemeContext.Provider
      value={{
        tema,
        alternarTema
      }}
    >

      {children}

    </ThemeContext.Provider>

  );
}