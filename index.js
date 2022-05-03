const express = require('express');
const bodyParser = require('body-parser');
const srv = express();
require('./db');
const allRoutes = require('./routes');
srv.use('/api', allRoutes);

//express config
srv.set('trust proxy', 1);
srv.use(bodyParser.json());
srv.use(bodyParser.urlencoded({extended: true}));

const SRV_PORT = 3030;

srv.listen(SRV_PORT, () => {
    console.warn(`server is working on ${SRV_PORT} port`);
});
