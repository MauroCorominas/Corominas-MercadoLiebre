const express = require ("express")

const app = express()
const path = require("path")

app.use(express.static(path.join(__dirname,"../public")));

const port = process.env.PORT || 3001;

const PORT = 3001;

app.listen(PORT, ()=>{
    console.log(`Se prendio en el puerto ${PORT}`)
})

app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname,"views/home.html"));
})

app.listen(port,()=>console.log(`Servidor corriendo en el puerto ${port}`));