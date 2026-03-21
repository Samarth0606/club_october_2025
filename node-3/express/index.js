const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Hello World!')
})


const PORT = 8080 //2000-9000 (major ports are available)
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
