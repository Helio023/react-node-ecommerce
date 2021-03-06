require('dotenv').config({path: '.env'})
const app = require('./app')

const port =  5000 || process.env.PORT

app.listen(port, () => {
    console.log(`App running on port: ${port}`);
})