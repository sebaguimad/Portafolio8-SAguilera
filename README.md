## Table of Contents
1. [¿De qué trata el proyecto?]
2. [¿Qué tecnologias se usaron?]
3. [Dependencias]
4. [Github y deploy pages]

### Autor: Sebastián Andrés Aguilera Madariaga

### ¿De qué trata el proyecto?
***
Portafolio número 8:
Para ejecutar el proyecto, sólo se necesita npm run dev

```
$ npm run dev : correr proyecto
```

El proyecto consiste en una página web estilo e-comerce es un sitio web de comercio electrónico que permite a los usuarios comprar productos en línea. El sitio web utiliza Node.js y Express para crear un servidor, y usa Handlebars como motor de plantillas para renderizar las vistas en el navegador. Los datos de los productos se almacenan en una base de datos postgresql y se accede a ellos a través de modelos Sequelize. El sitio web permite a los usuarios agregar productos a un carrito de compras, actualizar la cantidad de productos en el carrito y eliminar productos del carrito. Cuando el usuario decide comprar los productos en el carrito, se crea una venta en la base de datos, y el carrito de compras se vacía. Finalmente, el sitio web permite a los usuarios ver un registro de todas las ventas realizadas, incluyendo el ID de la venta, el ID del producto, la cantidad, el precio unitario y el precio total.

Consta con una página "Home" de inicio donde se muestran los productos en formato card, en la cual se le puede dar en "Añadir al Carro" o "Ver Detalle. Para comprar el producto se debe logear en la página se debe autenticar el usuario utilizando el sistema de registro que encripta la contraseña con bycript y luego te redirije a la página de login para efectuar el login y se puedan utilizar las funciones de la página. En el Navbar muestra y cuenta los Usuarios registrados.

Una vez logeado puede ingresar al mantenedor de productos, accediendo mediante el enlace en el navbar el cual te redirige a un sistema CRUD de productos, el cual está basado en modelos de bases de datos relacionales que consta de las tablas relacionadas Categoria.model.js, Comentario.model.js, Like.model.js, Post.model.js y Usuario.model.js. Las cuales operan mediante el ORM (Object-Relational Mapping) para Node.js que permite interactuar con bases de datos relacionales de manera más sencilla a través de código JavaScript. Sequelize permite definir modelos de datos y realizar operaciones de consulta, inserción, actualización y eliminación de registros en una base de datos relacional sin tener que escribir sentencias SQL directamente.

También consta de un sistema de securización de rutas, con la función checkAuthenticate, el cual verifica el token jwt, esto evita que alguien que no haya logeado ingrese a ciertas rutas. La construcción de la página está basado en el modelo MVC (Modelo Vista Controlador) que es un patrón de arquitectura de software que se utiliza comúnmente en el desarrollo de aplicaciones web. Se basa en la separación de la aplicación en tres componentes principales:

Modelo: es la capa de datos de la aplicación. Representa la estructura y lógica de los datos que maneja la aplicación y se encarga de acceder y manipular dichos datos.

Vista: es la capa de presentación de la aplicación. Se encarga de mostrar los datos al usuario y de interactuar con él a través de la interfaz gráfica.

Controlador: es la capa de control de la aplicación. Se encarga de coordinar la interacción entre el modelo y la vista, procesando las solicitudes del usuario y actualizando los datos según corresponda.

La base de datos de la página está en elephantsql, mis credenciales están en el archivo db.

Entre las tecnologías utilizadas se encuentran, Sequelize, cors, moment, nodemon, pg, pg-hstore, uuid, Handlebars, JSON, Express, Node JS, Javascript. Handlebars es un motor de plantillas que permite crear y renderizar HTML de forma dinámica, JSON es un formato de intercambio de datos que se utiliza para enviar y recibir información en la web, Express es un framework de Node JS que permite crear aplicaciones web y APIs de forma sencilla y rápida, Node JS es una plataforma de desarrollo que permite utilizar Javascript en el servidor. Javascript es un lenguaje de programación que se utiliza para crear interactividad en la web y Boostrap es un conjunto de clases CSS predefinidas que facilitan el diseño de interfaces web.

## ¿Qué tecnologías se usaron?
***
 Lista de la tecnologia utilizada:

* [Sequelize](https://sequelize.org/): last version
* [Boostrap](https://tailwindcss.com/docs/installation/play-cdn): last version
* [Express](https://expressjs.com): last version
* [Handlebars](https://handlebarsjs.com): last version


## Dependencias
Cors
Express
Express-Handlebars
Nodemon
Sequelize
pg
pg-hstore
jason web token
cookie-parser
bcrypt
moment
dotenv
***
## Github
***
Enlace github al código de fuente: https://github.com/sebaguimad/Portafolio-8


Perfil github: https://github.com/sebaguimad/
