const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    const today = new Date()
    const currentDay = today.getDate()

    if (currentDay === 6 || currentDay === 0) {
        res.send('its a weekend')
    } else {
        res.send('its a week day')
    }
})


app.listen(3000, () => {
    console.log('Server running at port 3000')
})