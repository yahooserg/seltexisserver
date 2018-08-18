///<reference path="./node_modules/@types/node/index.d.ts"/>
import * as express from 'express';
import { Application } from 'express';
import * as http from 'http';
const app: Application = express();

import {MyNodeConfig} from '../seltexisserverconfig/mynodeconfig';
const myNodeConfig = new MyNodeConfig();


const httpServer = http.createServer(app);
httpServer.listen(myNodeConfig.serverPort, () => { });


app.use(function(req, res, next) {
  var allowedOrigins = ['https://seltex.ru', 'https://www.seltex.ru'],
  origin = req.headers.origin;
  if (allowedOrigins.indexOf(origin) > -1) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }
  // res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "DELETE, PUT, GET, POST");
  next();
});


app.get('/api/pricelistcreatestatus', function(req, res) {
  // mySqlService.priceListCreateGetStatus(1, (data) => {
  //   res.send(data);
  // });
  res.send([{"value":"0"}]);

});

// app.get('/api/tempfunc', function(req, res) {
//   console.log('tempFunc')
//   mySqlService.tempFunc((items) => {
//     res.send(items);
//   });
// });
