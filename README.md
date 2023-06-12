<!-- PROJECT LOGO -->
<br />
<p align="center">
  <img src="https://github.com/orlandCasta/technical-test/assets/47255334/2aa0020c-bb70-4528-bd57-e0b60d7d5f71" alt="screenshot" />
</p>

<div align="center">
  <h3 align="center">My ToDo App</h3>
</div>

<!-- ABOUT THE PROJECT -->
## Sobre el proyecto

El proyecto consiste en un sistema de gestión de tareas implementado con React y Redux. El objetivo principal es permitir a los usuarios administrar sus tareas, cambiar su estado (pendiente o completada), editar el contenido de las tareas y eliminarlas.

El proyecto está dividido en dos componentes principales: "Tasks" y "TaskFinished". El componente "Tasks" muestra la lista de tareas pendientes y proporciona la funcionalidad para cambiar el estado de una tarea, editar su contenido y guardar los cambios. El componente "TaskFinished" muestra la lista de tareas completadas y permite eliminar tareas de la lista.

Para gestionar el estado de la aplicación, se utiliza Redux junto con React Redux para conectar los componentes al store global. Se definen acciones y se utilizan los métodos connect y mapStateToProps para conectar las acciones y el estado del store a los componentes respectivos.

El proyecto también utiliza solicitudes asíncronas para interactuar con un servidor API. Se definen varias acciones de solicitud para cargar, actualizar y eliminar tareas, y se llaman a través de las funciones props en los componentes.

El proyecto cuenta con un backend implementado con Node.js y Express.js para proporcionar la lógica de negocio y la persistencia de datos necesaria para el sistema de gestión de tareas, se usó MongoDB y mongoose como base de datos y capa de servicio, cabe mencionar que la estructura principal de los componentes del backend se encuentra dividida en tres capas, enrutador, controlador y capa de servicio que se encarga de hacer las consultas a la db.

### Construido con

* React
* Node
* Express
* Mongodb
* Redux

<!-- GETTING STARTED -->
## Comencemos

Para obtener una copia de trabajo del proyecto, primero es necesario descargarlo, luego instalaremos las dependencias de software de la aplicación, sigue los siguientes pasos.


### Instalación

_A continuación se muestra un ejemplo de cómo puede iniciar la instalación y configuración de la aplicación. Esta plantilla no depende de ninguna dependencia o servicio externo._

1. Clone el repositorio
   ```sh
   git clone git@github.com:orlandCasta/technical-test.git
   ```
2. Una vez se tenga, ingrese a la carpeta **technical-test**
   ```sh
   cd technical-test\
   ```
3. Instale las dependencias, puede que ya lo haya observado, la carpeta **technical-test** separa el frontend (client) y el backend (api), en carpetas separadas, afortunadamente al ejecutar **npm i** se instalan las dependencias de ambos proyectos al mismo tiempo, esto con el uso de la librería **concurrently**, entonces no es necesario instalar las dependencias por separado, amenos que por alguna rara razón falle la instalación.
   ```sh
   npm i
   ```
4. Ejecute el proyecto, al igual que el comando anterior **concurrently** levantara ambos proyectos con este mismo comando, por lo que no debe iniciar uno por uno, amenos que falle la ejecucion.
   ```sh
   npm run start
   ```
5. Ahora debería ver algo como esto en la consola y el proyecto estaría en ejecución correctamente, solo ingrese a la url que vite genera al realizar la ejecución y podrá ver la aplicacion.

<p align="center">
  <img src="https://github.com/orlandCasta/technical-test/assets/47255334/a93b35d8-b764-48eb-bb42-e7e9c6884f07" alt="screenshot" />
</p>

<!-- LICENSE -->
## Licencia

Distribuido bajo la licencia MIT.
