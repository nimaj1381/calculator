const express = require("express")
const bodyParser = require("body-parser")

const app = express()
app.use(bodyParser.urlencoded({extended : true}))

app.get("/", function (reg, res) {
    res.sendfile(__dirname + "/index.html")
})

app.post("/", function (req, res) {
    let num1 = Number(req.body.num_1)
    let num2 = Number(req.body.num_2)
    let result = num1 + num2
    res.send('Result ' + result)
})

app.listen("3000", function () {
    console.log("Server is up on port 3000")
})
