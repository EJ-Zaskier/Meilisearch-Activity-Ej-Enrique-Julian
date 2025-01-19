# Meilisearch-Activity
Evidenciando mi progreso en la actividad de meilisearch y aprendiendo a usar git xd

Creamos una instancia en un servidor de aws, en nuestro caso elegimos el servicio de 
Procedemos a realizar la instalacion de meilisearch y su configuracion

Meilisearch es un motor de busqueda, funcionando mediante indices, en el cual cada uno tiene 
un documento.

La logica detras de la conexion con Meilisearch es la siguiente:
meili se ejecuta en como un servicio en el servidor(en el puerto 7700 por defecto)
podemos configurarlo localmente, pero tambien en un servidor remoto (un vps o un docker)
Para poder conectarnos a meilisearch, debemos tener un token de acceso, que es un codigo 
unico que nos permite acceder a nuestra instancia de meilisearch.
Para obtenerlo, debemos ir a la interfaz de administracion de meilisearch, y ir a la pestaña 
de "API Keys", donde podremos generar un nuevo token.
Una vez generado, debemos copiar el token y guardarlo en un archivo de texto, que luego 
podremos cargar en el codigo.
El codigo que se encarga de conectarnos a meilisearch es el siguiente:
```js
import { MeiliSearch } from 'meilisearch';
const client = new MeiliSearch({
  host: 'http://localhost:7700',
  apiKey: 'masterKey',
});
```
Una vez tenemos nuestro cliente, podemos realizar las operaciones que queramos, como por ejemplo 
crear un indice, agregar un documento, hacer una búsqueda, etc.
Para crear un indice, podemos hacer lo siguiente:
```js
const index = await client.index('movies');
```
Esto creara un indice llamado "movies" en nuestra instancia de meilisearch.
Para agregar un documento, podemos hacer lo siguiente:
```js
await index.addDocuments([
  { id: 1, title: 'Arcane', genre: 'Fantasia' },
  { id: 2, title: 'La Casa de Papel', genre: 'Drama' },
]);
```
Esto agregara dos documentos a nuestro indice.
Para hacer una búsqueda, podemos hacer lo siguiente:
```js
const searchResult = await index.search('Arcane');
console.log(searchResult);
```
Esto buscara en el indice "movies" todos los documentos que contengan la palabra "Arcane".

## Personalizacion?..
En parte de la personalizacion en la interfaz de meilisearch creamos el pryecto en mi caso react 
en el cual tuve complicaciones de versiones de node, y de typescript, pero en general, pero ya quedo
se personaliza con el codigo que se encuentra en el archivo "App.tsx", que es el que se encarga de 
mostrar la interfaz de usuario.