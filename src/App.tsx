import { MeiliSearch } from 'meilisearch';
import React, { useState } from 'react';

const client = new MeiliSearch({
  host: 'http://18.227.13.140:7700',
  apiKey: 'c716781c75b1115ae1bd945fd73b87d2f12a5f2e878cfc6fbe45f68d57be'
});


async function buscarPeliculas(query) {
  const resultados = await client.index('peliculas').search(query);
  return resultados;
}


function App() {
  const [query, setQuery] = useState('');
  const [resultados, setResultados] = useState([]);

  const manejarBusqueda = async () => {
    const response = await client.index('peliculas').search(query);
    setResultados(response.hits);
  };

  return (
    <div>
      <h1>Buscador de Películas</h1>
      <input
        type="text"
        placeholder="Busca una película..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={manejarBusqueda}>Buscar</button>

      <ul>
        {resultados.map((pelicula) => (
          <li key={pelicula.id}>
            <h2>{pelicula.titulo}</h2>
            <p>{pelicula.descripcion}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
function Resultado({ pelicula }) {
  return (
    <div style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
      <h2>{pelicula.titulo}</h2>
      <p>{pelicula.descripcion}</p>
    </div>
  );
}



export default App;