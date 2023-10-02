# CountryApp

Esta aplicación consiste en un buscador de países con persistencia local. Los países se pueden buscar de 3 formas diferentes: **por capital**, **por país** o **por región**. El resultado nos mostrará una tabla con el código del país, su bandera, su nombre, su capital, su población y su información.

Al clicar en la información, se mostrará una pantalla con todos los datos relacionados con el país seleccionado de forma dinámica: capital, región, código, idioma, moneda, traducciones de su nombre, etc.

La aplicación se ha generado con la versión 16.0.0 de [Angular CLI](https://github.com/angular/angular-cli), con la versión 18.16.0 de NodeJS y con la versión 9.6.6 de npm.

## Iniciar la aplicación

Ejecutar el comando `npm start` y acceder a la URL `http://localhost:4200/`.

## Obtención de la información de la API

Se ha de acceder a la página de [REST Countries](https://restcountries.com) y allí están todas las URLs disponibles para obtener todos los países mediantes diferentes formas.
* Si se busca por su capital, la URL es `https://restcountries.com/v3.1/capital/{capital}`.
* Si se busca directamente por el país, la URL es `https://restcountries.com/v3.1/name/{name}`.
* Si se busca por su región, la URL es `https://restcountries.com/v3.1/region/{region}`.