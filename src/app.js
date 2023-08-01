const express = require ("express")

const app = express()

app.use(express.static(path.join(__dirname,"../public")));


const PORT = 3001;

app.listen(PORT, ()=>{
    console.log(`Se prendio en el puerto ${PORT}`)
})

app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname,"views/home.html"));
})