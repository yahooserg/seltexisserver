import * as mysql from 'mysql';
import { MySqlConnection } from '../../seltexisserverconfig/dbconnectmysqlnode.js';
let mySqlConnection = new MySqlConnection;

export class MySqlService {

  constructor () {

  }

  getCompanyAtLogin(companyName, callback) {
    let items = [];
    let query = `SELECT idcompanies as id, name, fullName FROM companies WHERE name = "${companyName}"`;
    let connection = mysql.createConnection(mySqlConnection);
    let request = connection.query(query);

    request
    .on('result', function (row, index) {
      items[items.length] = row;
    })
    .on('end', function () {
      callback(items);
    });

    connection.end();
  }

  getCurrentUser(user, callback) {
    let items = [];
    let query = `SELECT users.id as id, usersSecrets.token as token FROM users, usersSecrets WHERE users.id = "${user.id}" and usersSecrets.token = "${user.token}" and users.id = usersSecrets.id`;
    let connection = mysql.createConnection(mySqlConnection);
    let request = connection.query(query);

    request
    .on('result', function (row, index) {
      items[items.length] = row;
    })
    .on('end', function () {
      callback(items);
    });

    connection.end();
  }

}
