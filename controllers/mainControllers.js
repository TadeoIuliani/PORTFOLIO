const fs = require("fs")

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

