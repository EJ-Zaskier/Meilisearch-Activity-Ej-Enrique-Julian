import React, { useState } from 'react';
import { MeiliSearch } from 'meilisearch';

const client = new MeiliSearch({
  host: 'http://18.227.13.140', 
  apiKey: 'c716781c75b1115ae1bd945fd73b87d2f12a5f2e878cfc6fbe45f68d57be',
});

const App = () => {
  const [query, setQuery] = useState(''); 
  const [resultados, setResultados] = useState([]); // Resultados 
  const [error, setError] = useState(null); //error

  const manejarBusqueda = async () => {
    try {
      setError(null); 
      const index = client.index('movies'); 
      const response = await index.search(query); // búsqueda
      setResultados(response.hits); // Actualiza
    } catch (err) {
      console.error('Error al buscar:', err);
      setError('No se pudo realizar la búsqueda');
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Busca aqui tilin</h1>
      <input
        type="text"
        placeholder="Escribe el título de una película..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ padding: '10px', width: '300px' }}
      />
      <button onClick={manejarBusqueda} style={{ padding: '10px', marginLeft: '10px' }}>
        Buscar
      </button>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <ul style={{ marginTop: '20px' }}>
        {resultados.map((movies) => (
          <li key={movies.id} style={{ marginBottom: '10px' }}>
            <strong>{movies.titulo || 'Sin título'}</strong> - {movies.genero || 'Sin género'}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;