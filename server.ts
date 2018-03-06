///<reference path="./node_modules/@types/node/index.d.ts"/>
import * as express from 'express';
import { Application } from 'express';
import * as http from 'http';
import { MySqlService } from './services/mysql.service';
const mySqlService = new MySqlService();
const app: Application = express();

const httpServer = http.createServer(app);
httpServer.listen(5555, () => { })

app.use(function(req, res, next) {
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

app.get('/api/company/exists/:company', function(req, res) {
  mySqlService.getCompanyAtLogin(req.params.company, (items, error) => {
    if (error) {
      res.send({ status: 'error', error: error });
    } else {
      res.send({ status: 'ok', items: items });
    }
  });
});

app.get('/api/logInUser/:email/:password/:companyId', function(req, res) {
  mySqlService.logIn({
    email: req.params.email,
    password: req.params.password,
    companyId: req.params.companyId
  }, (items, error) => {
    if (error) {
      res.send({ status: 'error', error: error });
    } else {
      res.send({ status: 'ok', items: items });
    }
  });
});

app.get('/api/checkCurrentUser/:userId/:token', function(req, res) {
  mySqlService.getCurrentUser({ id: req.params.userId, token: req.params.token }, (items) => {
    res.send(items);
  });
});

app.get('/api/check/userlogged/user/:userID/email/:email/token/:token/company/:company/', function(req, res) {
  mySqlService.checkUserLoggedIn(req.params.userID, req.params.email, req.params.token, req.params.company, (items, error) => {
    if (error) {
      res.send({ status: 'error', error: error });
    } else {
      res.send({ status: 'ok', items: items });
    }
  });

  app.get('/api/getallinventory/company/:company', function(req, res) {
    mySqlService.getAllInventory(req.params.company, (items) => {
      res.send(items);
    });
  });

  app.get('/api/getinventory/company/:company/id/:id', function(req, res) {
    mySqlService.getInventory(req.params.company, req.params.id, (items) => {
      res.send(items);
    });
  });

  app.get('/api/getinventorynumbers/company/:company/id/:id', function(req, res) {
    mySqlService.getInventoryNumbers(req.params.company, req.params.id, (items) => {
      res.send(items);
    });
  });

  app.put('/api/updateinventorynumber/company/:company/numberid/:numberid/newnumber/:newnumber/newManufacturer/:newmanufacturer', function(req, res) {
    mySqlService.updateInventoryNumber(req.params.company, req.params.numberid, req.params.newnumber, req.params.newmanufacturer, (items) => {
      res.send(items);
    });
  });

  app.put('/api/updateinventorymainnumber/company/:company/numberid/:numberid/inventoryid/:inventoryid/', function(req, res) {
    mySqlService.updateInventoryMainNumber(req.params.company, req.params.numberid, req.params.inventoryid, (items) => {
      res.send(items);
    });
  });

  app.post('/api/saveinventorynewnumber/company/:company/partid/:partid/newnumber/:newnumber/newManufacturer/:newmanufacturer', function(req, res) {
    mySqlService.saveInventoryNewNumber(req.params.company, req.params.partid, req.params.newnumber, req.params.newmanufacturer, (items) => {
      res.send(items);
    });

  });

  app.delete('/api/deleteinventorynumber/company/:company/numberid/:numberid', function(req, res) {
    mySqlService.deleteInventoryNumber(req.params.company, req.params.numberid, (items) => {
      res.send(items);
    });

  });



});
