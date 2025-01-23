const fs = require("fs")

/* aca lo utilizaremos para leer un archivo JSON que contiene informacion de  concesionarias */

/* lectura del archivo JSON
leemos el archivo consecionarias.json de forma síncrona */
/* JSON.parse = convierte el contenido del archivo JSON en un objeto de JS para manipularlo mas facilmente en el codigo */
const lenguajesJSON = JSON.parse(fs.readFileSync("./data/lenguajes.js", "utf-8"))

module.exports = {
    index: (req,res)=>{
      res.render("main",{
        items: lenguajesJSON
      })
    }
}

