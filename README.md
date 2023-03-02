# My Awesome App

¡Bienvenido a mi aplicación! Esta aplicación fue creada con Vite y React.

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:5174](http://localhost:5174) to view it in your browser.

The page will reload when you make changes.
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the dist folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!


## Tecnologías
▪	Vite
▪	React
▪	Axios
▪	react-redux
▪	react-router-dom

## Instalación
Clona este repositorio en tu computadora local.
Abre una terminal y navega a la carpeta del proyecto.
Ejecuta el siguiente comando para instalar las dependencias:

### `npm install`

Una vez que se hayan instalado las dependencias, puedes correr la aplicación con el siguiente comando:

### `npm run dev`


## Contribuir
Si quieres contribuir a este proyecto, por favor sigue los siguientes pasos:

Haz un fork de este repositorio.
Crea una nueva rama con tus cambios:

### `git checkout -b my-feature`

Haz tus cambios y haz un commit:

### `git commit -m "mi mensaje de commit"`

Haz un push a tu rama:

### `git push origin my-feature`

Abre un Pull Request y describe tus cambios.

## ¡Gracias por contribuir!

<br>

## Algunas Características de mi App 

Consumo de API: https://pokeapi.co/docs/v2, se utiliza para obtener la información de los pokemones.

Creación de una ruta raiz “/”. Esta es una ruta publica, en la cual solamente contiene un input que le pregunta el nombre al usuario. Dicho nombre se almacena en la store de redux, y será obligatorio para que se pueda acceder a las rutas protegidas.

Se crea una ruta “/pokedex” la cual será una ruta protegida que tiene la función de darle un mensaje de bienvenida al usuario que ingrese.

Se listan los pokemones traídos desde la pokeapi y estos se representan en tarjetas con su información correspondiente. 

Cada tarjeta se genera por medio de un componente llamado “PokemonCard”, cada tarjeta es un link que lleva a la ruta “/pokedex/:id” con el id del Pokémon de la tarjeta.

Creación de una ruta “/pokedex/:id”. La cuál será una ruta protegida donde estará la información del Pokémon con el id de los parámetros de la url.

Contiene un select, cuyas opciones serán los tipos de pokemones. Esto para filtrarlos de acuerdo a su tipo.

Contiene un input para buscar un pokemon en específico por su nombre.


<br>

## ¿Quieres ver mi app despleagada?
Visita <a href="https://pokedex-app-ct.netlify.app/" target="_blank">Pokedex</a>.
