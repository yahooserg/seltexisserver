import * as mysql from 'mysql';
import { MySqlConnection } from '../../seltexisserverconfig/dbconnectmysqlnode.js';
let mySqlConnection = new MySqlConnection;

export class MySqlService {

  constructor() {

  }

  getCompanyAtLogin(companyName, callback) {
    let items = [];
    let query = `SELECT idcompanies as id, name, fullName FROM companies WHERE name = "${companyName}"`;
    let connection = mysql.createConnection(mySqlConnection);
    let request = connection.query(query);

    request
      .on('result', function(row, index) {
        items[items.length] = row;
      })
      .on('end', function() {
        if (items.length === 1) {
          callback(items[0]);
        } else callback(false);
      });

    connection.end();
  }

  getCurrentUser(user, callback) {
    let items = [];
    let query = `SELECT users.id as id, usersSecrets.token as token FROM users, usersSecrets WHERE users.id = "${user.id}" and usersSecrets.token = "${user.token}" and users.id = usersSecrets.id`;
    let connection = mysql.createConnection(mySqlConnection);
    let request = connection.query(query);

    request
      .on('result', (row, index) => {
        items[items.length] = row;
      })
      .on('end', () => {
        if (items.length === 1) {
          this.getUserRights(items[0], callback)
        } else callback(items);
      });

    connection.end();
  }

  logIn(data, callback) {
    let items = [];
    let query = `call getUserRights(${data.companyId}, '${data.email}')`;
    let connection = mysql.createConnection(mySqlConnection);
    let request = connection.query(query);

    request
      .on('result', (row, index) => {
        items[items.length] = row.rightId;
      })
      .on('end', () => {
        //let's get rid of OkPacket that arrives after stored procedure
        items.splice(items.length - 1, 1);

        if (items.length) {
          this.logInUser(data, items, callback);
        } else {
          callback(false);
        }
      });
    connection.end();
  }

  logInUser(data, rights, callback) {
    let items = [];
    let token = Math.floor((Math.random() * 10000000) + 1);
    let query = `call logInUser('${data.email}', '${data.password}', ${token})`;
    let connection = mysql.createConnection(mySqlConnection);
    let request = connection.query(query);

    request
      .on('result', (row, index) => {
        items[items.length] = row;
      })
      .on('end', () => {
        //let's get rid of OkPacket that arrives after stored procedure
        items.splice(items.length - 1, 1);
        if (items.length) {
          items[0].rights = {};
          items[0].rights[data.companyId] = rights;
          callback(items[0]);
        } else {
          callback(false);
        }
      });
    connection.end();
  }

  getUserRights(user, callback) {
    let items = [];
    let query = `SELECT companyId, rightId FROM usersRights WHERE userId = "${user.id}"`;
    let connection = mysql.createConnection(mySqlConnection);
    let request = connection.query(query);

    request
      .on('result', function(row, index) {
        items[items.length] = row;
      })
      .on('end', function() {
        user.rights = items;
        callback(user);
      });
    connection.end();
  }

}
