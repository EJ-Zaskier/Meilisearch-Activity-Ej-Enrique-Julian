import { MeiliSearch } from 'meilisearch';

// La conexión se configura con variables de entorno (ver .env.example).
// Usa una "search key" de solo lectura, nunca la master key.
const client = new MeiliSearch({
  host: process.env.REACT_APP_MEILI_HOST || 'http://localhost:7700',
  apiKey: process.env.REACT_APP_MEILI_SEARCH_KEY,
});

export default client;
