const express = require( "express")
const cors = require ("cors")
const { configV } = require ("./config/config.js")
const { schema } = require ("./config/schema.js")
const { validate } = require ("./lib/validate.js")
const { router } = require( "./modules/modules.routes.js")

validate(schema, configV)
const app = express()

app.use(cors())
app.use(express.json())


app.use("/api", router)


app.use((err,req,res,next)=>{
    const statusCode = err.statusCode || 500
    res.status(statusCode).json({
        statusCode:err.statusCode,
        message:err.message
    })
})



app.listen(configV.PORT, ()=>{
    console.log("http://localhost:", configV.PORT);
})