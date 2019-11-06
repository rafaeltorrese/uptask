const express = require('express')
const routes = require('./routes')

// Create An app
const app = express();

app.use('/' , routes());

app.listen(3000);
