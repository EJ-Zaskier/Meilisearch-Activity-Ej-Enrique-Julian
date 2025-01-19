import { MeiliSearch } from 'meilisearch';

// Configura conexión con el servidor Meili
const client = new MeiliSearch({
  host: 'http://18.227.13.140',
  apiKey: 'c716781c75b1115ae1bd945fd73b87d2f12a5f2e878cfc6fbe45f68d57be'
});

export default client;
