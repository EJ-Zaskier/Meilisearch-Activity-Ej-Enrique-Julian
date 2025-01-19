import React, { useState } from 'react';
import { MeiliSearch } from 'meilisearch';

const client = new MeiliSearch({
  host: 'http://18.227.13.140', 
  apiKey: 'c716781c75b1115ae1bd945fd73b87d2f12a5f2e878cfc6fbe45f68d57be',
});

const App = () => {
  const [query, setQuery] = useState('');
  const [resultados, setResultados] = useState([]);
  const [error, setError] = useState(null);

  const manejarBusqueda = async () => {
    try {
      setError(null);
      const index = client.index('movies');
      const response = await index.search(query);
      setResultados(response.hits);
    } catch (err) {
      console.error('Error al buscar:', err);
      setError('No se pudo realizar la búsqueda');
    }
  };

  return (
    <div style={{ backgroundColor: '#1e1e1e', color: '#fff', minHeight: '100vh', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center', color: '#00ff7f' }}>Buscador de Películas</h1>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Escribe el título de una película..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{
            padding: '10px',
            width: '70%',
            border: '1px solid #555',
            borderRadius: '5px',
            fontSize: '16px',
            backgroundColor: '#333',
            color: '#fff',
          }}
        />
        <button
          onClick={manejarBusqueda}
          style={{
            padding: '10px 20px',
            marginLeft: '10px',
            backgroundColor: '#00ff7f',
            color: '#1e1e1e',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontWeight: 'bold',
          }}
        >
          Buscar
        </button>
      </div>

      {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}

      <ul style={{ marginTop: '20px', listStyleType: 'none', padding: 0, display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
        {resultados.map((movie) => (
          <li
            key={movie.id}
            style={{
              backgroundColor: '#333',
              borderRadius: '10px',
              padding: '15px',
              width: '250px',
              textAlign: 'center',
              color: '#fff',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            }}
          >
            <img
              src={movie.image || 'https://via.placeholder.com/200x300?text=Sin+Imagen'}
              alt={movie.title || 'Sin título'}
              style={{ width: '100%', height: 'auto', borderRadius: '10px', marginBottom: '10px' }}
            />
            <strong style={{ fontSize: '18px', display: 'block', marginBottom: '5px' }}>
              {movie.title || 'Sin título'}
            </strong>
            <span style={{ color: '#00ff7f' }}>{movie.genre || 'Sin género'}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;