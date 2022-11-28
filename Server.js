const port = 8000
const mongoose = require("mongoose")
const dotenv = require("dotenv")

dotenv.config({path: "./config/config.env"})
const Db = process.env.DATABASE

mongoose.connect(Db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log("MongoDB Connected!")
})

const app = require("./app")

app.listen(port, ()=>{
    console.log(`App is Listening to port ${port}`)
})