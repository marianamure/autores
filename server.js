//en client
//npx create-react-app client
//cd client

////npx create-react-app client
//npm install axios react-router-dom@5.3.0

//En server
//npm init -y
//npm install express mongoose cors
// En package.json se debe poner nodemon 

const express = require("express");
const cors = require("cors");
const app = express();

//Para usar Json y obtener datos de URL
app.use( express.json(), express.urlencoded({ extended: true }) );

//Permite accesar desde un origen distinto
app.use(
    cors({
        //URL de front end
        origin: "http://localhost:3000"
    }),
);

//Inicializa BD
require("./server/config/mongoose.config");

//Importamos rutas
const misRutas = require("./server/routes/autor.routes");
misRutas(app);

//Ejecutamos server
app.listen(8000, ()=>console.log("Servidor listo !"));


//npm start