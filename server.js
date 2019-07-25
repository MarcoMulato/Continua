const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const port = 3000

app.use( bodyParser.json() );
app.use( bodyParser.urlencoded({ extended: true })); 

app.get('/', (req, res) => res.send('Hello World!'))

app.post('/suma', (req, res) => {
    const { num1, num2, num3 } = req.body
    console.log('Respuesta:')
    console.log(req.body)
    if( (num1 + num2) == num3 ){
        res.status(200).json({ message: 'Ok'})
    }else{
       res.status(500).json({ message: 'Nok' })   
    }
})

app.listen(port, () => console.log(`Listening on port ${port}!`))