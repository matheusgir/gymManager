const express = require('express')
const routes = express.Router()

routes.get('/', function(req, res) {
    return res.redirect("instructors")
})

routes.get('/instructors', function(req, res) {
    return res.render("instructors/index")
})

routes.get('/instructors/create', function(req, res) {
    return res.render("instructors/create")
})

routes.post("/instructors", function(req, res) {
  
    // if(req.body.name == "") {
    //     return res.send("Preencha o nome do instrutor")
    // }

    const keys = Object.keys(req.body)

    return res.send(req.body)
})

routes.get('/members', function(req, res) {
    return res.render("members")
})

module.exports = routes