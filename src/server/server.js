const path = require('path');
const express = require('express');

const app = express();
//const SRC_DIR = path.dirname(__dirname);
const PROJ_DIR = __dirname;
const HTML_FILE = path.join(PROJ_DIR, '/index.html');

app.use(express.static(PROJ_DIR));

app.get('/', (req,res)=>{
    res.send(HTML_FILE);
});

app.listen(8080);