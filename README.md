# Reading List

## Contexto

Esta fue una prueba técnica realizada para coordinar mis habilidades y ir aprendiendo nuevas cosas para poder formarme como profesional, de ahora en adelante hablare como si fuera un trabajo realizado para un cliente.

## Solicitud

Somos Lectura Rápida S.A., un sello editorial de libros multinacional. Queremos ofrecer a nuestro público una forma de ver nuestro catálogo y poder guardar los libros que les interesan en una lista de lectura.

Para ello, queremos desarrollar una aplicación web que permita a los usuarios ver los libros disponibles y crear una lista de lectura. Ten en cuenta que:

- No sabemos si el framework que utilicemos ahora será el definitivo, pero querremos reutilizar el máximo de código posible.
- La aplicación debe ser fácil de usar y agradable a la vista.
- Tenemos un 80% de usuarios que vienen de navegadores de escritorio.

### Funcionalidades Solicitadas

- [x] **Visualización de Libros Disponibles**: La aplicación debe mostrar una lista de libros disponibles que el usuario pueda revisar.
- [x] **Creación de Lista de Lectura**: El usuario debe ser capaz de crear una lista de lectura a partir de los libros disponibles. En la UI debe quedar claro qué libros están en la lista de lectura y cuáles no. También debe ser posible mover un libro de la lista de lectura a la lista de disponibles.
- [x] **Filtrado de Libros por Género**: Los usuarios deben poder filtrar la lista de libros disponibles por género, y se mostrará un contador con el número de libros disponibles, el número de libros en la lista de lectura y el número de libros disponibles en el género seleccionado.
- [x] **Sincronización de Estado**: Debe haber una sincronización del estado global que refleje el número de libros en la lista de lectura y el número de libros todavía disponibles. Si un libro se mueve de la lista de disponibles a la lista de lectura, el recuento de ambos debe actualizarse en consecuencia.
- [x] **Persistencia de Datos**: La aplicación debe persistir los datos de la lista de lectura en el almacenamiento local del navegador. Al recargar la página, la lista de lectura debe mantenerse.
- [ ] **Sincronización entre pestañas**: Si el usuario abre la aplicación en dos pestañas diferentes, los cambios realizados en una pestaña deben reflejarse en la otra. Sin necesidad de usar Backend.
- [x] **Despliegue**: La aplicación debe estar desplegada en algún servicio de hosting gratuito (Netlify, Vercel, Firebase, etc) y debe ser accesible a través de una URL pública. Indica la URL en el README.
- [x] **Test**: La aplicación debe tener AL MENOS un test. Haz el test que consideres más importante para tu aplicación.

## Consejos sobre el código

- [ ] **Estructura del código**: El código debe estar bien organizado y fácil de leer.
- [ ] **Semántica HTML**: El HTML debe ser semántico y accesible.
- [x] **Pensando en equipo**: Prepara tu proyecto pensando que cualquier persona de tu equipo puede tener que trabajar en él en el futuro. (scripts en el package.json, mínima documentación en el README, comentarios en el código si es necesario, etc)
- [x] **Formatea tu código**: Asegúrate de que tu código está formateado de forma consistente. Puedes usar Prettier o cualquier otra herramienta que te guste.
- [ ] **Preparado para producción**: Asegúrate de que tu aplicación está lista para producción. Minimiza el código, optimiza las imágenes, etc.

## Adicionales

- [ ] Implementar una funcionalidad de búsqueda en la lista de libros disponibles.
- [x] Añade un nuevo filtro para filtrar los libros por número de páginas.
- [ ] Permitir la reorganización de los libros en la lista de lectura por prioridad.
- [x] Haz que tu diseño sea responsive.

## Iniciar Proyecto

recomiendo utilizar `npm` o `bun` para instalar las dependencias del proyecto.

Si conoces un poco mas del tema de gestores de paquetes, puedes utilizar el que sea de tu agrado.

1. Estando en la carpeta raíz, ejecuta el siguiente comando:

   ```bash
     npm install
   ```

2. Para iniciar el proyecto en modo de desarrollo, utiliza el siguiente comando:
   ```bash
   npm run dev
   ```

Para iniciar los test, utiliza `npm test`
