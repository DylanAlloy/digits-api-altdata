const express = require("express")
const config  = require("./config")
const app = express()
var cors = require('cors')
app.use(cors())
app.use(express.json())
app.use("/",                require("./routes/index"))
app.use("/darkpool",        require("./routes/darkpool/index"))
app.use("/news",            require("./routes/newsapi/index"))
app.use("/reserve"),        require("./routes/reserve/index")
/* Listening to the port that is defined in the config file. */
app.listen(config.servicePort,function(){
    console.log(`Now listening on ${config.servicePort}`)
})
