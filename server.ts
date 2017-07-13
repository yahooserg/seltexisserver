///<reference path="./node_modules/@types/node/index.d.ts"/>
import * as express from 'express';
import { Application } from 'express';
import * as http from 'http';
import {MySqlService} from './services/mysql.service';
const mySqlService = new MySqlService();
const app: Application = express();

const httpServer = http.createServer(app);
httpServer.listen(5555,() => {})

app.use(function (req, res, next) {
  var allowedOrigins = ['http://1.local', 'https://fvolchek.net', 'https://www.fvolchek.net', 'http://localhost:4200', 'http://seltex.ru', 'http://www.seltex.ru'],
  origin = req.headers.origin;
  if (allowedOrigins.indexOf(origin) > -1) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }
  // res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "DELETE, PUT");
  next();
});

app.get('/api/company/exists/:company', function (req, res) {

  mySqlService.getCompanyAtLogin(req.params.company, (items) => {
    res.send(items);
  });
});

app.get('/api/checkCurrentUser/:userId/:token', function (req, res) {

  mySqlService.getCurrentUser({id: req.params.userId, token: req.params.token}, (items) => {
    res.send(items);
  });
});
