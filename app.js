const express = require("express")
const StudentRouter = require("./router/StudentRouter")
const authRouter = require("./router/authRouter")
const assmentRouter = require("./router/AssmentRouter")
const Applications = require("./router/Applications")
const course = require("./router/Course")
const cookkieParser = require("cookie-parser")
const fileUploader = require("express-fileupload")
const app = express()

app.use(fileUploader({
    useTempFiles: true
}))
app.use(cookkieParser())
app.use(express.json());

app.use("/api/v1/student", StudentRouter)
app.use("/api/v1/", authRouter)
app.use("/api/v1/course", course)
app.use("/api/v1/assment", assmentRouter)
app.use("/api/v1/applications", Applications)

app.use((err, req, res, next)=>{
   const errorStatus = err.status || 500
   const errorMessage = err.message || "Something went wrong!"
   return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
   })
})

app.use("/", (req, res) => {
    res.status(200).send("My Teacher Api")
})

module.exports = app
