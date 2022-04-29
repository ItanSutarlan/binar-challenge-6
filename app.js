const express = require('express');
const cors = require('cors');
const swaggerUI = require('swagger-ui-express');

const apiRouter = require('./server/routes');
const errorHandler = require('./server/middlewares/errorHandler');
const swaggerDocument = require('./restful_api.json');

const app = express();
const PORT = process.env.PORT || 4000;

// docs
app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

// middlewares
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(errorHandler);

/**
 * @Routes /api
 * entrypoint for all API routes
 */
app.use('/api', apiRouter);

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
