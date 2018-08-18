///<reference path="./node_modules/@types/node/index.d.ts"/>
import * as express from 'express';
import { Application } from 'express';
import * as http from 'http';
import * as fs from 'fs';
import * as https from 'https';
import {MyNodeConfig} from '../seltexisserverconfig/mynodeconfig';
const myNodeConfig = new MyNodeConfig();
import { MySqlService } from './services/mysql.service';
const mySqlService = new MySqlService();
import { MyFileService } from './services/file.service';
const myFileService = new MyFileService();
import { MyFunctions } from './services/functions.service';
const myFunctions = new MyFunctions();
import { MyXLService } from './services/xls.service';
const myXLService = new MyXLService();
import {MyAWSService} from './services/aws.service';
const myAWSService = new MyAWSService();
const app: Application = express();
let bodyParser = require('body-parser');

let privateKey = fs.readFileSync(`/etc/letsencrypt/live/seltex.ru/privkey.pem`);
let certificate = fs.readFileSync(`/etc/letsencrypt/live/seltex.ru/fullchain.pem`);
let credentials = {key: privateKey, cert: certificate};
const httpsServer = https.createServer(credentials, app);
httpsServer.listen(myNodeConfig.serverPort, (error) => {
  console.log(error);
 console.log(myNodeConfig);
});


// app.get('/api/tempfunc', function(req, res) {
//   console.log('tempFunc')
//   mySqlService.tempFunc((items) => {
//     res.send(items);
//   });
// });
