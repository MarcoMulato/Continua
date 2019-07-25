const express = require('express')

const port = 3000

app.get('/', (req, res) => res.send('Hola mundo!'))

app.listen(port, () => console.log(`Server corriendo en el puerto:  ${port}!`))