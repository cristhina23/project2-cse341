const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("./swagger.json");
const bodyParser = require('body-parser');
const { notFound, errorHandler } = require("./middlewares/errorHandler");


const mongodb = require('./db/connect');

const app = express();

dotenv.config();

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));
app
  .use(bodyParser.json())
  .use(cors());

app.use('/', require('./routes/index'));
app.use('/users', require('./routes/userRoutes'));
app.use('/products', require('./routes/productRoutes'))



app.use(notFound);
app.use(errorHandler);


const port = process.env.PORT || 5000;

mongodb.initDb((err) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port);
    console.log(`Connected to DB and listening on ${port}`);
  }
});