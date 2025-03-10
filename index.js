require('dotenv').config();
const express = require ("express")
/* importar el modulo Nativo path, para trabajar con rutas de archivos y directorios de manera compatible
con diferentes sistemas operativos */
const path = require ("path")

// Definimos el puerto en el que escuchara nuestro servidor


// const port = 3000
const PORT = process.env.PORT || 3000;

//creamos una instancia de express para nuestra aplicacion
const app = express()

app.set("views", path.join(__dirname,"views")) // definimos la carpeta views como ubicacion de las vistas
app.set ("view engine","ejs")// definimos EJS como el motor de vistas para reenderizar contenido dinamico

// Middleware para servir archivos estaticos (css,js,imagenes,etc) desde la carpeta public
app.use (express.static(path.join(__dirname,"public")))

// Middleware para manejar datos tipo x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// Middleware para manejar datos tipo JSON
app.use(express.json());

//importar las rutas de los diferentes modulos para modularizar nuestra aplicacion
const mainRouter = require ("./routes/mainRouter.js") // Rutas Principales como la pagina de inicio
const sendCorreoRouter = require("./routes/sendCorreoRouter.js")


// Definimos las rutas para diferentes funcionalidades de la aplicacion

app.use ("/",mainRouter); // rutas principales asociados a la raiz
app.use("/sendCorreo", sendCorreoRouter)


/* iniciamos el servidor en el puerto que definimos (port) y mostramos un mensaje de confirmacion en la consola */

app.listen (PORT , ()=>{
console.log(`Servidor OK, en el puerto ${PORT}`);

});