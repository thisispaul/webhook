const express = require('express')

const app = express()
app.use(express.json());

const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/webhook', (req, res) => {
    console.log("got request");
    console.log(req.body);

    res.json({code: 200})
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
