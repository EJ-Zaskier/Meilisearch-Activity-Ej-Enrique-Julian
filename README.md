# Reporte de Desarrollo

## Lógica detrás de la conexión con Meilisearch

La conexión con Meilisearch se realiza utilizando la biblioteca oficial de JavaScript de Meilisearch. Primero, se crea un cliente configurando el host del servidor Meilisearch y proporcionando una clave API para la autenticación. Esto se logra mediante el siguiente código:
```javascript
 const client = new MeiliSearch({
  host: 'http://18.227.13.140',
  apiKey: 'c716781c75b1115ae1bd945fd73b87d2f12a5f2e878cfc6fbe45f68d57be',
 });
```
Luego, para realizar búsquedas en el índice de películas llamado movies, se utiliza el método search() del cliente. Este método toma como parámetro la consulta ingresada por el usuario y devuelve los resultados coincidentes en el índice especificado. Si no se encuentran coincidencias, el método retorna un arreglo vacío, lo cual se maneja mostrando un mensaje claro al usuario indicando que no hubo resultados. La búsqueda se encapsula en una función asíncrona para manejar correctamente las promesas y los posibles errores.

## Manejo de datos en el proyecto
Estado local con React: Se utilizan los hooks useState para gestionar el estado de la aplicación. En particular:
query: Almacena el texto de búsqueda ingresado por el usuario.
resultados: Contiene los datos devueltos por Meilisearch tras una búsqueda exitosa.
error: Maneja y muestra los mensajes de error si la búsqueda falla.

# Realización de la búsqueda:
Al hacer clic en el botón "Buscar", se ejecuta la función manejarBusqueda, que realiza la consulta al índice de Meilisearch.
Los resultados se actualizan en el estado resultados y se muestran en la interfaz de usuario.

## Renderizado de resultados:

Los resultados de la búsqueda se iteran utilizando el método map, creando una lista de elementos que muestran información como el título, los géneros y una imagen de la película. Por ejemplo, un resultado puede renderizarse como un card que incluye el título "Inception", el género "Ciencia Ficción", y un póster asociado. Si un campo como el título o el póster está ausente, se muestran valores por defecto, como una imagen genérica con el texto "Sin Imagen" y el título "Sin título", garantizando que la aplicación no falle por datos incompletos.

# Personalizaciones implementadas en la aplicación
## Estilo visual:
Se utilizó un diseño oscuro (“dark mode”) con colores contrastantes como el verde para los elementos destacados. Esto mejora la experiencia del usuario al reducir la fatiga visual, especialmente en entornos con poca luz. Además, los colores contrastantes aseguran una buena legibilidad, lo que aumenta la accesibilidad para personas con discapacidades visuales o sensibilidad al brillo.
Se implementó un diseño adaptable para la lista de resultados, usando flexbox para permitir una distribución uniforme y atractiva de los elementos.
## Mensajes de error:
Si ocurre un error durante la búsqueda, se muestra un mensaje amigable para el usuario (“No se pudo realizar la búsqueda”) en color rojo.
## Valores predeterminados:
En caso de que los datos de una película no incluyan un póster o un título, se proporcionan valores predeterminados como una imagen genérica y el texto “Sin título”.
