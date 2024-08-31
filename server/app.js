const express = require('express')
const app = express()
const dotenv = require("dotenv");
const database = require('./config/Database');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRoutes = require("./routes/User");
const productRoutes = require("./routes/Product");


dotenv.config();
const PORT = process.env.PORT || 4000;

database.connect();
  
app.use(cors());
app.use(bodyParser.json());

app.use("/auth", userRoutes);
app.use("/", productRoutes)

app.get('/', (req, res) => {3
  res.send('server is up and running....')
})

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
})