///<reference path="./node_modules/@types/node/index.d.ts"/>
import * as express from 'express';
import { Application } from 'express';
import * as fs from 'fs';
import {MyNodeConfig} from '../seltexisserverconfig/mynodeconfig';
const myNodeConfig = new MyNodeConfig();
// import { MySqlService } from './services/mysql.service';
// const mySqlService = new MySqlService();
// import { MyFileService } from './services/file.service';
// const myFileService = new MyFileService();
// import { MyFunctions } from './services/functions.service';
// const myFunctions = new MyFunctions();
// import { MyXLService } from './services/xls.service';
// const myXLService = new MyXLService();
// import {MyAWSService} from './services/aws.service';
// const myAWSService = new MyAWSService();
const app: Application = express();
let bodyParser = require('body-parser');
// import * as request from 'request';
import * as http from 'http';
import * as https from 'https';
//
// //////////////////////////////////////////////////
// ////////// http/https secure or not block
if (!myNodeConfig.secure) {
  const server = http.createServer(app);
  server.listen(myNodeConfig.serverPort, () => {
    console.log("runing http")
  });
} else {
  let privateKey = fs.readFileSync(`/etc/letsencrypt/live/seltex.ru/privkey.pem`);
  let certificate = fs.readFileSync(`/etc/letsencrypt/live/seltex.ru/fullchain.pem`);
  let credentials = {key: privateKey, cert: certificate};
  const server = https.createServer(credentials, app);
  server.listen(myNodeConfig.serverPort, () => {
    console.log("runing httpSSSS")

  });
}
//////////////////////////////////////////////



//////////////////////////////////////////////////////////
// ALL TEMP FUNCS AND APIs:
//////////////////////////////////////////////////////////
// app.post('/api/test', function(req, res) {
//   console.log(req);
// });
//
// app.get('/api/temp', function(req, res) {
//   console.log('tempFunc')
// });
//
// import { TempService } from './temp/temp.service';
// const tempService = new TempService();
// tempService.createURLs();
//////////////////////////////////////////////////////////
// END ALL TEMP FUNCS AND APIs:
//////////////////////////////////////////////////////////
