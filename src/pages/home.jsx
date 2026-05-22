import {
  useState,
  useEffect
} from "react";

import { Link } from "react-router-dom";

function Home() {

  const [filmes, setFilmes] =
    useState([]);

  useEffect(() => {

    fetch("https://api.tvmaze.com/shows")

      .then((resposta) =>
        resposta.json()
      )

      .then((dados) => {

        setFilmes(dados.slice(0, 20));

      });

  }, []);

  return (

    <div>

      <h1>Lista de Filmes</h1>

      {filmes.map((filme) => (

        <div
          key={filme.id}
          style={{
            marginBottom: "20px"
          }}
        >

          <h2>{filme.name}</h2>

          <img
            src={filme.image?.medium}
            alt={filme.name}
          />

          <br />
          <br />

          <Link to={`/filme/${filme.id}`}>
            Ver detalhes
          </Link>

        </div>

      ))}

    </div>
  );
}

export default Home;