const express = require('express');

// Dep que possibilita o tratamento de erros do Error Handler para funçoes assincronas
require('express-async-errors');
const cors = require('./app/middlewares/cors');
const errorHandler = require('./app/middlewares/errorHandler');
const routes = require('./routes');

const app = express();

app.use(express.json());

app.use(cors);

app.use(routes);

// MiddleWare Error Handler -> Tratamento de erros
app.use(errorHandler);

app.listen(3001, () => console.log('🔥 Server Started at http://localhost:3001'));
