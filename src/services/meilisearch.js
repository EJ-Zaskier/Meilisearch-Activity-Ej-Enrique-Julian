import { MeiliSearch } from 'meilisearch';

// Configura conexión con el servidor Meili
const client = new MeiliSearch({
  host: 'http://18.227.13.140:7700',
  apiKey: 'c716781c75b1115ae1bd945fd73b87d2f12a5f2e878cfc6fbe45f68d57be'
});

const manejarBusqueda = async () => {
  try {
    const index = client.index('peliculas');
    const results = await index.search('tu_query');
    console.log(results);
  } catch (error) {
    console.error('Error al realizar la búsqueda:', error);
  }
};

manejarBusqueda();
export default client;
