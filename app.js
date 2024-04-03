const express = require('express')
const app = express()
port = 3000
app.get('/', (req, res) => res.send('Hello World Here are the update version'))

app.listen(port, () => console.log("server start at "+port))