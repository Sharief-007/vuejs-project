const express = require('express')

const app = express()

app.use(express.static('dist'))

let port = process.env.PORT;
if (port == null || port === "") {
    port = 8080;
}
app.listen(port);