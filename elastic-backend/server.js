const express = require('express');
const ElasticRoutes = require('./routes/ElasticRoutes')

const app = express();
app.use(express.json());
app.use(express.urlencoded({limit: '500mb', extended: true, parameterLimit: 500000000}));


app.listen(5000, () => {
    console.log(`Elastic Backend Server Started at http://localhost:5000`)
})

app.use('/elastic', ElasticRoutes)


