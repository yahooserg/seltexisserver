import * as mysql from 'mysql';
import { MySqlConnection } from '../../seltexisserverconfig/dbconnectmysqlnode.js';
let mySqlConnection = new MySqlConnection;

export class MySqlService {

  constructor() {

  }

  getCompanyAtLogin(companyName, callback) {
    let items = [];
    let error: any = false;
    let query = `SELECT idcompanies as id, name, fullName FROM companies WHERE name = "${companyName}"`;
    // console.log(query);

    let connection = mysql.createConnection(mySqlConnection);
    let request = connection.query(query);

    request
      .on('error', function(err) {
        error = err;
        // console.log(query, err);

      })
      .on('result', function(row, index) {
        items[items.length] = row;
      })
      .on('end', function() {
        if (error) {
          callback(false, error);
        } else if (items.length === 1) {
          callback(items[0]);
        } else callback(false);
      });

    connection.end();
  }

  getCurrentUser(user, callback) {
    let items = [];
    let query = `SELECT users.id as id, usersSecrets.token as token FROM users, usersSecrets WHERE users.id = "${user.id}" and usersSecrets.token = "${user.token}" and users.id = usersSecrets.id`;
    // console.log(query);

    let connection = mysql.createConnection(mySqlConnection);
    let request = connection.query(query);

    request
    .on('error', function(err) {
      // console.log(query, err);

    })
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


  getUserRights(user, callback) {
    let items = [];
    let query = `SELECT companyId, rightId FROM usersRights WHERE userId = "${user.id}"`;
    // console.log(query);

    let connection = mysql.createConnection(mySqlConnection);
    let request = connection.query(query);

    request
    .on('error', function(err) {
      // console.log(query, err);

    })
      .on('result', function(row, index) {
        items[items.length] = row;
      })
      .on('end', function() {
        user.rights = items;
        callback(user);
      });
    connection.end();
  }

  logIn(data, callback) {
    let items = [];
    let error: any = false;
    let query = `call getUserRights(${data.companyId}, '${data.email}')`;
    // console.log(query);

    let connection = mysql.createConnection(mySqlConnection);
    let request = connection.query(query);

    request
      .on('error', function(err) {
        error = err;
        // console.log(query, err);
      })
      .on('result', (row, index) => {
        items[items.length] = row.rightId;

      })
      .on('end', () => {
        if (error) {
          callback(false, error);
        } else {
          //let's get rid of OkPacket that arrives after stored procedure
          items.splice(items.length - 1, 1);

          if (items.length) {
            this.logInUser(data, items, callback);
          } else {
            callback(false);
          }
        }

      });
    connection.end();
  }

  logInUser(data, rights, callback) {
    let items = [];
    let token = Math.floor((Math.random() * 10000000) + 1);
    let query = `call logInUser('${data.email}', '${data.password}', ${token})`;
    // console.log(query);
    let connection = mysql.createConnection(mySqlConnection);
    let request = connection.query(query);

    request
    .on('error', function(err) {
      // console.log(query, err);

    })
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

  checkUserLoggedIn(user, email, token, company, callback) {
    let items = [];
    let error: any = false;
    let query = `call getUserRights(${company}, '${email}')`;
    // console.log(query);

    let connection = mysql.createConnection(mySqlConnection);
    let request = connection.query(query);

    request
      .on('error', function(err) {
        error = err;
        // console.log(query, err);

      })
      .on('result', (row, index) => {
        items[items.length] = row.rightId;
      })
      .on('end', () => {
        if (error) {
          callback(false, error);
        } else {
          //let's get rid of OkPacket that arrives after stored procedure
          items.splice(items.length - 1, 1);

          if (items.length) {
            this.checkUserLoggedInNext(user, token, callback);
          } else {
            callback(false);
          }
        }

      });
    connection.end();
  }

  checkUserLoggedInNext(user, token, callback) {
    let items = [];
    let query = `call checkUserLoggedIn(${user}, ${token})`;
    // console.log(query);

    let connection = mysql.createConnection(mySqlConnection);


    let request = connection.query(query);


    request
      .on('error',(err)=>{
        // console.log(err);
        callback({'error':err});
        return;
      })
      .on('result', (row, index) => {
        items[items.length] = row;
      })
      .on('end', () => {
        // let's get rid of OkPacket that arrives after stored procedure
        items.splice(items.length - 1, 1);
        callback(items[0]);
      });
    connection.end();
  }

  getManufacturers(company, callback) {
    let items = [];
    let query = `call getManufacturers(${company})`;
    let connection = mysql.createConnection(mySqlConnection);
    let request = connection.query(query);
    request
      .on('result', (row, index) => {
        items[items.length] = row;
      })
      .on('end', () => {
        // let's get rid of OkPacket that arrives after stored procedure
        items.splice(items.length - 1, 1);
        callback(items);
      });
    connection.end();
  }

  getAllInventory(company, callback) {
    let items = [];
    let query = `call getAllInventory(${company})`;
    let connection = mysql.createConnection(mySqlConnection);
    let request = connection.query(query);
    request
      .on('result', (row, index) => {
        items[items.length] = row;
      })
      .on('end', () => {
        // let's get rid of OkPacket that arrives after stored procedure
        items.splice(items.length - 1, 1);
        callback(items);
      });
    connection.end();
  }

  getLast100Inventory(company, callback) {
    let items = [];
    let query = `SELECT * FROM seltexru.inventory order by id desc limit 100`;
    let connection = mysql.createConnection(mySqlConnection);
    let request = connection.query(query);
    request
      .on('result', (row, index) => {
        items[items.length] = row;
      })
      .on('end', () => {
        // let's get rid of OkPacket that arrives after stored procedure
        // items.splice(items.length - 1, 1);
        callback(items);
      });
    connection.end();
  }

  getInventory(company, id, callback) {
    let items = [];
    let query = `call getInventory(${company}, ${id})`;
    let connection = mysql.createConnection(mySqlConnection);
    let request = connection.query(query);
    request
      .on('result', (row, index) => {
        items[items.length] = row;
      })
      .on('end', () => {
        // let's get rid of OkPacket that arrives after stored procedure
        items.splice(items.length - 1, 1);
        callback(items);
      });
    connection.end();
  }

  getInventoryNumbers(company, id, callback) {
    // console.log("heyhey")
    let items = [];
    let query = `call getInventoryNumbers(${id})`;
    let connection = mysql.createConnection(mySqlConnection);
    let request = connection.query(query);
    request
      .on('result', (row, index) => {
        items[items.length] = row;
      })
      .on('end', () => {
        // let's get rid of OkPacket that arrives after stored procedure
        items.splice(items.length - 1, 1);
        callback(items);
        // console.log(items);
      });
    connection.end();

  }

  searchInventory(query, callback) {
    let items = [];
    let connection = mysql.createConnection(mySqlConnection);
    let request = connection.query(query);
    request
      .on('error',(err)=>{
        // console.log(err);
        callback({'error':err});
      })
      .on('result', (row, index) => {
        items[items.length] = row;
      })
      .on('end', () => {
        // let's get rid of OkPacket that arrives after stored procedure
        // items.splice(items.length - 1, 1);
        callback(items);
      });
    connection.end();
  }

  updateInventoryNumber(company, numberId, newNumber, newManufacturer, callback) {
    let items = [];
    let query = `call updateInventoryNumber(${numberId},'${newNumber}',${newManufacturer})`;
    let connection = mysql.createConnection(mySqlConnection);
    let request = connection.query(query);
    request
      .on('result', (row, index) => {
        items[items.length] = row;
      })
      .on('end', () => {
        // let's get rid of OkPacket that arrives after stored procedure
        items.splice(items.length - 1, 1);
        callback(items);
      });
    connection.end();
  }

  updateInventoryMainNumber(company, numberId, inventoryId, callback) {
    let items = [];
    let query = `call updateInventoryMainNumber(${numberId},${inventoryId})`;
    let connection = mysql.createConnection(mySqlConnection);
    let request = connection.query(query);
    request
      .on('result', (row, index) => {
        items[items.length] = row;
      })
      .on('end', () => {
        // let's get rid of OkPacket that arrives after stored procedure
        items.splice(items.length - 1, 1);
        callback(items);
      });
    connection.end();
  }

  saveInventoryNewNumber(company, partId, newNumber, newManufacturer, callback) {
    let items = [];
    let query = `call addInventoryNewNumber(${partId},'${newNumber}',${newManufacturer})`;
    let connection = mysql.createConnection(mySqlConnection);
    let request = connection.query(query);
    request
      .on('result', (row, index) => {
        items[items.length] = row;
      })
      .on('end', () => {
        // let's get rid of OkPacket that arrives after stored procedure
        items.splice(items.length - 1, 1);
        callback(items);
      });
    connection.end();
  }

  deleteInventoryNumber(company, numberId, callback) {
    let items = [];
    let query = `call deleteInventoryNumber(${numberId})`;
    let connection = mysql.createConnection(mySqlConnection);
    let request = connection.query(query);
    request
      .on('result', (row, index) => {
        items[items.length] = row;
      })
      .on('end', () => {
        // let's get rid of OkPacket that arrives after stored procedure
        items.splice(items.length - 1, 1);
        callback(items);
      });
    connection.end();
  }

  updateInventoryDescription(company, inventoryId, newDescription, callback) {
    let items = [];
    let query = `call updateInventoryDescription(${inventoryId},'${newDescription}')`;
    let connection = mysql.createConnection(mySqlConnection);
    let request = connection.query(query);
    request
      .on('result', (row, index) => {
        items[items.length] = row;
      })
      .on('end', () => {
        // let's get rid of OkPacket that arrives after stored procedure
        items.splice(items.length - 1, 1);
        callback(items);
      });
    connection.end();
  }

  updateInventoryComment(company, inventoryId, newComment, callback) {
    let items = [];
    let query = `call updateInventoryComment(${inventoryId},'${newComment}')`;
    let connection = mysql.createConnection(mySqlConnection);
    let request = connection.query(query);
    request
      .on('result', (row, index) => {
        items[items.length] = row;
      })
      .on('end', () => {
        // let's get rid of OkPacket that arrives after stored procedure
        items.splice(items.length - 1, 1);
        callback(items);
      });
    connection.end();
  }

  updateInventoryWeight(company, inventoryId, newWeight, callback) {
    let items = [];
    let query = `call updateInventoryWeight(${inventoryId},${newWeight})`;
    let connection = mysql.createConnection(mySqlConnection);
    let request = connection.query(query);
    request
      .on('result', (row, index) => {
        items[items.length] = row;
      })
      .on('end', () => {
        // let's get rid of OkPacket that arrives after stored procedure
        items.splice(items.length - 1, 1);
        callback(items);
      });
    connection.end();
  }

  updateManufacturer(company, id, name, fullName, callback) {
    let items = [];
    let query = `call updateManufacturer(${id},'${name}','${fullName}')`;
    let connection = mysql.createConnection(mySqlConnection);
    let request = connection.query(query);
    request
      .on('result', (row, index) => {
        items[items.length] = row;
      })
      .on('end', () => {
        // let's get rid of OkPacket that arrives after stored procedure
        items.splice(items.length - 1, 1);
        callback(items);
      });
    connection.end();
  }

  deleteManufacturer(company, id, callback) {
    let items = [];
    let query = `call deleteManufacturer(${id})`;
    let connection = mysql.createConnection(mySqlConnection);
    let request = connection.query(query);
    request
      .on('result', (row, index) => {
        items[items.length] = row;
      })
      .on('end', () => {
        // let's get rid of OkPacket that arrives after stored procedure
        items.splice(items.length - 1, 1);
        callback(items);
      });
    connection.end();
  }

  addManufacturer(company, newName, newFullName, callback) {
    let items = [];
    let query = `call addManufacturer('${newName}','${newFullName}')`;
    let connection = mysql.createConnection(mySqlConnection);
    let request = connection.query(query);
    request
      .on('error', function(err) {
        console.log(err);
      })
      .on('result', (row, index) => {
        items[items.length] = row;
      })
      .on('end', () => {
        // let's get rid of OkPacket that arrives after stored procedure
        items.splice(items.length - 1, 1);
        callback(items);
      });
    connection.end();
  }

  updateImage(company, image, callback) {
    let items = [];
    let query = `call updateImage('${image}')`;
    let connection = mysql.createConnection(mySqlConnection);
    let request = connection.query(query);
    request
      .on('error', function(err) {
        console.log(err);
      })
      .on('result', (row, index) => {
        items[items.length] = row;
        // console.log(row)
      })
      .on('end', () => {
        // let's get rid of OkPacket that arrives after stored procedure
        items.splice(items.length - 1, 1);
        var buffer = new Buffer( items[0].newImage);
        var bufferBase64 = buffer.toString('binary');
        console.log(items[0].newImage.length);

        callback(JSON.stringify(bufferBase64));
      });
    connection.end();
  }

  getPriceListData(company, callback) {
    let items = [];
    let query = `SELECT * FROM seltexru.inventory where description like '%cat%' or comment like '%cat%' or description like '%prodiesel%' or comment like '%prodiesel%'`;
    let connection = mysql.createConnection(mySqlConnection);
    let request = connection.query(query);
    request
      .on('error', function(err) {
        console.log(err);
      })
      .on('result', (row, index) => {
        items[items.length] = row;
        // console.log(row)
      })
      .on('end', () => {
        // let's get rid of OkPacket that arrives after stored procedure
        // items.splice(items.length - 1, 1);
        callback("OK");

        let lines: number = items.length;
        let currentLines: number = 0;
        for (let i: number = 0; i < lines; i += 1) {
          let numbers = [];
          query = `call getInventoryNumbers(${items[i].id})`;
          request = connection.query(query);
          request
            .on('result', (row, index) => {
              numbers[numbers.length] = row;
            })
            .on('end', () => {
              numbers.splice(numbers.length - 1, 1);
              items[i].numbers = numbers;
              currentLines += 1;
              console.log(`${currentLines}/${lines}`);
              if(lines === currentLines) {
                callback(items);
                connection.end();
              }
            });

        }
      });
  }

  // tempFunc(callback) {
  //   let items = [];
  //
  //
  //   let regex2 = /Volvo/;
  //
  //   let query = `select inventory.id, inventory.description from inventory, inventoryNumbers where inventory.id = inventoryNumbers.inventoryId and inventory.description like '%Volvo%' and inventory.description not like '%dd%' and inventory.description not like '%cat%' and inventory.description not like '%prodiesel%' and inventory.description not like '%pai%' and inventory.description not like '%mcbee%' and inventory.description not like '%ctp%' and inventory.description not like '%cgr%' and inventory.description not like '%MAHLE%' and inventoryNumbers.number = ''`;
  //   let connection = mysql.createConnection(mySqlConnection);
  //   let request = connection.query(query);
  //
  //
  //   request
  //     .on('result', (row, index) => {
  //       // items[items.length] = row;
  //       if(regex2.test(row.description)){
  //         // console.log(row.description)
  //         // let index = row.description.indexOf("Cummins");
  //         // row.comment = row.description.substring(index);
  //         // row.description = row.description.substring(0, index - 1);
  //         let regex = /(R|E|EA|RA|A)?[0-9\-]{5,12}/g;
  //         let regOutput = row.description.match(regex);
  //         // console.log(row.description,';')
  //         // console.log(row.comment,';')
  //         // console.log(regOutput);
  //
  //
  //
  //         if (regOutput){
  //
  //           // query = `delete from inventoryNumbers where inventoryId = ${row.id}`;
  //           // console.log(query);
  //           // connection.query(query);
  //           for(let i = 0; i < regOutput.length; i += 1) {
  //             if (i === 0) {
  //               query = `update inventoryNumbers set number = '${regOutput[i]}' where inventoryId = ${row.id} and main = 1`;
  //             } else {
  //               query = `insert into inventoryNumbers (inventoryId, manufacturerId, number, main) values (${row.id}, 4, '${regOutput[i]}',0 )`;
  //             }
  //             connection.query(query);
  //
  //             // console.log(query);
  //           }
  //         }
  //         // console.log('-------');
  //         // regex = /[A-Za-z0-9]{2,3}-[0-9]{4,4}/g;
  //         // regOutput = row.description.match(regex);
  //         // // console.log(row.description,';')
  //         // // console.log(row.comment,';')
  //         // console.log(regOutput);
  //         //
  //         // if (regOutput){
  //         //   // query = `delete from inventoryNumbers where inventoryId = ${row.id}`;
  //         //   // console.log(query);
  //         //   // connection.query(query);
  //         //   for(let i = 0; i < regOutput.length; i += 1) {
  //         //
  //         //     query = `insert into inventoryNumbers (inventoryId, manufacturerId, number, main) values (${row.id}, 1, '${regOutput[i]}',0 )`;
  //         //     // connection.query(query);
  //         //
  //         //     console.log(query);
  //         //   }
  //         // }
  //         // query = `update inventoryComments set comment = '${row.comment}' where id = ${row.id}`;
  //         // query = `update inventoryDescription set description = '${row.description}' where id = ${row.id}`;
  //         // connection.query(query);
  //         // console.log(query);
  //         // query = `update inventoryDescription set description = '${row.description}' where id = ${row.id}`;
  //
  //       }
  //     })
  //     .on('end', () => {
  //       callback({"done":"allright"});
  //       connection.end();
  //
  //     });
  // }

  // tempFunc(callback) {
  //   let items = [];
  //   let qty = 0;
  //   let regex = /[0-9]{3,12}/;
  //
  //   let regex2 = /Volvo/;
  //
  //   let query = `select inventory.id, inventory.description from inventory, inventoryNumbers where inventory.id = inventoryNumbers.inventoryId and inventory.description like '%Volvo%' and inventory.description not like '%cat%' and inventory.description not like '%prodiesel%'`;
  //   let connection = mysql.createConnection(mySqlConnection);
  //   let request = connection.query(query);
  //
  //
  //   request
  //     .on('result', (row, indexRow) => {
  //       qty += 1;
  //       // items[items.length] = row;
  //       if(regex2.test(row.description)){
  //         // console.log(row.description)
  //         let index = row.description.indexOf("Volvo");
  //         row.comment = row.description.substring(index);
  //         row.description = row.description.substring(0, index - 1);
  //         let regOutput = regex.exec(row.comment);
  //         // console.log(row.description,';')
  //         // console.log(row.comment,';')
  //         // console.log(regOutput)
  //
  //         if (regOutput){
  //           row.comment = row.comment.substring(0,regOutput.index - 1);
  //
  //           // console.log(query);
  //           // let request = connection.query(query);
  //         }
  //         query = `update inventoryComments set comment = '${row.comment}' where id = ${row.id}`;
  //         // query = `update inventoryDescription set description = '${row.description}' where id = ${row.id}`;
  //         connection.query(query);
  //         // console.log(query);
  //         query = `update inventoryDescription set description = '${row.description}' where id = ${row.id}`;
  //         connection.query(query);
  //
  //         // console.log(query);
  //
  //         // console.log('-------', qty);
  //       }
  //     })
  //     .on('end', () => {
  //       callback({"done":"allright"});
  //       connection.end();
  //
  //     });
  // }

}
