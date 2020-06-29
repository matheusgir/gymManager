exports.post = function(req, res) {
  
    // if(req.body.name == "") {
    //     return res.send("Preencha o nome do instrutor")
    // }

    const keys = Object.keys(req.body)

    for(key of keys) {
        if(req.body[key]=="")
            return res.send('Please, fill all fields!')
    }

   return res.send(req.body)
}
