require('dotenv').config()
const express = require('express')
const app = express()

app.set('veiw engine', 'jsx')
app.engine('jsx', require('express-react-veiws').createEngine())
app.use(express.static('public'))

app.use('/places', require('./controllers/places'))

app.get('/', (req, res) => {
    res.render('home')
})

app.get('*', (req, res) => {
    res.render(404).send('<h1>404 Page</h1>')
})

app.listen(process.env.PORT)