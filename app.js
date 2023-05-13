const express = require('express')
const bodyParser = require('body-parser')
let items = ['1st item']

const app = express()
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    const today = new Date()
    let options = {
        weekday: 'long',
        day: 'numeric',
        month: 'long'
    }

    let day = today.toLocaleDateString('en-US', options)
    res.render('list', { kindOfDay: day, newListItems: items })
})

app.post('/', (req, res) => {
    var item = req.body.newItem
    items.push(item)
    res.redirect('/')
    console.log('your input is: ' + item)
})

app.listen(3000, () => {
    console.log('Server running at port 3000')
})