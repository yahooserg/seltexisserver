///<reference path="./node_modules/@types/node/index.d.ts"/>
import * as express from 'express';
import { Application } from 'express';
import * as http from 'http';
const app: Application = express();

import {MyNodeConfig} from '../seltexisserverconfig/mynodeconfig';
const myNodeConfig = new MyNodeConfig();


const httpServer = http.createServer(app);
httpServer.listen(myNodeConfig.serverPort, () => {
  console.log(myNodeConfig);
 });


// app.get('/api/tempfunc', function(req, res) {
//   console.log('tempFunc')
//   mySqlService.tempFunc((items) => {
//     res.send(items);
//   });
// });
