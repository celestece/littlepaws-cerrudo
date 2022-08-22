![Logo Little Paws](https://drive.google.com/uc?export=download&id=1UCVbekuZB9mIsfekAYA4Hzl6Xy0Tq_Ob)

# Descripción

***Little Paws*** es una aplicación e-commerce de productos para mascotas donde el usuario podra ver los productos, ordenarlos por categoria, y hacer su pedido. Todas las graficas de los productos son de creación e **ilustracion propia** utilizando Illustrator.


# Instalación

Para instalar y ejecutar la aplicación web, se debe **[clonar este repositorio](https://docs.github.com/es/repositories/creating-and-managing-repositories/cloning-a-repository)**. Posteriormente estando ubicado en el directorio creado, se debe ejecutar este comando:

    cd littlepaws-cerrudo
Luego, vamos a verificar si node.js esta instalado, para lo cual en la terminal de la aplicacion y posicionandose en el path correcto, se ejecuta este comando:

    node -v
Esto resultara en el numero de la version o en un error. De ocurrir lo segundo, se debe **descargar el entorno** desde [la pagina oficial](https://nodejs.org/es/download/) y correr el instalador.

Una vez obtenido node (o si ya se lo tiene), se deben **instalar las dependencias** del proyecto. Para ello, se ejecuta el siguiente comando en la terminal: 

    npm i
Luego se **corre el proyecto** con este comando:

    npm start
 Esto correra la aplicacion en el puerto 3000, pero de no estar disponible preguntara para correrlo en otro puerto, a lo que debe contestar que si presionando la tecla "y". 
 Terminado todo este proceso, la pagina se abrira automaticamente o puede acceder a ella con el link **[http://localhost:3000/](http://localhost:3000/)** (o el puerto correspondiente) en su navegador.

# Demo
Esta aplicacion fue levantada usando Netlify. Se puede acceder a ella utilizando este link -> https://littlepaws-coderhouse.netlify.app/

# Librerías & Dependencias
Librerias y dependencias (algunas externas) fueron utilizarlas para darle un valor adicional a la aplicación
 - **[react](https://es.reactjs.org/)** -> Para poder utilizar JSX. Version: ^18.2.0
 - [**Boostrap Vanilla**](https://react-bootstrap.github.io/getting-started/introduction) -> Para otorgar estilos personalizados de una manera facil y eficiente. Version: ^5.1.3
 -  [**React Bootstrap**](https://react-bootstrap.github.io/getting-started/introduction) -> Para otorgar estilos personalizados con el uso de componentes, que hace todo mas legible y simple. Version: ^2.4.0
 - **[react-router-dom](https://v5.reactrouter.com/web/guides/quick-start)** -> Para realizar una navegacion entre componentes dinamicamente estableciendo rutas con parametros. Permite que la aplicación sea una SPA. Version: ^6.3.0
 - [**Firebase**](https://firebase.google.com/docs/firestore/quickstart) ->  Base de datos para los productos. Version: ^9.9.2

## Contacto

***Celeste Cerrudo***
LinkedIn -> https://www.linkedin.com/in/celeste-c-263306103/

