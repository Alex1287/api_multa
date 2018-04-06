const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

//ajustes
app.set('port', process.env.PORT || 3000);

//middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());

//routes
require('./routes/infractorRoutes')(app);
require('./routes/agenteRoutes') (app);
require('./routes/observacionesRoutes') (app);
require('./routes/privilegiosRoutes') (app);
require('./routes/credencialesRoutes') (app);

app.listen(app.get('port'), () => {
  console.log('SERVIDOR EN PUERTO 3000');
});
