"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var dbconnectmysqlnode_js_1 = require("../seltexisserverconfig/dbconnectmysqlnode.js");
var app = express_1.express;
console.log(dbconnectmysqlnode_js_1.MySqlConnection);
//
// (function () {
//   "use strict";
//   // var test = require('./test');
//   // console.log(test);
//   // return;
//
//   var express = require('express'),
//     // cookieParser = require('cookie-parser'),
//     app = express(),
//     mysql = require('mysql'),
//     mysqlConnection = require(__dirname + '/../seltexisserverconfig/dbconnectmysqlnode.js'),
//     // myFunctions = require('./myfunctions'),
//     // getTimeString = myFunctions.getTimeString,
//     // getDateString = myFunctions.getDateString,
//     // https = require('https'),
//     // fs = require('fs'),
//     // privateKey,
//     // certificate,
//     // credentials,
//     // httpsServer;
//     http,
//     httpServer;
//
//   //UNCOMMENT FOR production
//   //
//   // privateKey = fs.readFileSync(__dirname + '/../ssl.key');
//   // certificate = fs.readFileSync(__dirname + '/../ssl.crt');
//   // credentials = {key: privateKey, cert: certificate};
//   // httpsServer = https.createServer(credentials, app);
//   // httpsServer.listen(5555, function () {
//   // });
//
//   //COMMENT FOR production
//   //
//   http = require('http');
//   httpServer = http.createServer(app);
//   httpServer.listen(5555, function () {
//     console.log('start');
//   });
//
//   app.use('/assets', express.static(__dirname + '/public'));
//
//   app.set('view engine', 'ejs');
//
//   app.use(function (req, res, next) {
//     var allowedOrigins = ['http://1.local', 'https://fvolchek.net', 'https://www.fvolchek.net', 'http://localhost:4200', 'http://seltex.ru', 'http://www.seltex.ru'],
//     origin = req.headers.origin;
//     if (allowedOrigins.indexOf(origin) > -1) {
//       res.setHeader('Access-Control-Allow-Origin', origin);
//     }
//     // res.header("Access-Control-Allow-Credentials", "true");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     res.header("Access-Control-Allow-Methods", "DELETE, PUT");
//     next();
//   });
//
//   app.get('/catalog/:partId', function (req, res) {
//
//     var query = "SELECT * FROM inventory WHERE id = " + req.params.partId,
//       connection = mysql.createConnection(mysqlConnection);
//
//     connection.connect();
//
//     connection.query(query, function (err, rows, fields) {
//       console.log(rows[0]);
//       res.render('index', {part: rows[0]});
//     });
//
//   });
//
// }());
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL1VzZXJzL3NlcmdlaS9PbmVEcml2ZS9Eb2N1bWVudHMvMS5Xb3JrL3NvZnQvcHJvamVjdHMvc2VsdGV4aXMvc2VydmVyL3NlbHRleGlzc2VydmVyL3NlcnZlci50cyIsInNvdXJjZXMiOlsiL1VzZXJzL3NlcmdlaS9PbmVEcml2ZS9Eb2N1bWVudHMvMS5Xb3JrL3NvZnQvcHJvamVjdHMvc2VsdGV4aXMvc2VydmVyL3NlbHRleGlzc2VydmVyL3NlcnZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLG1DQUFrQztBQUNsQyx1RkFBZ0Y7QUFDaEYsSUFBSSxHQUFHLEdBQUcsaUJBQU8sQ0FBQztBQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLHVDQUFlLENBQUMsQ0FBQztBQUM3QixFQUFFO0FBQ0YsaUJBQWlCO0FBQ2pCLGtCQUFrQjtBQUNsQixxQ0FBcUM7QUFDckMsMEJBQTBCO0FBQzFCLGVBQWU7QUFDZixFQUFFO0FBQ0Ysc0NBQXNDO0FBQ3RDLGtEQUFrRDtBQUNsRCx1QkFBdUI7QUFDdkIsZ0NBQWdDO0FBQ2hDLCtGQUErRjtBQUMvRixpREFBaUQ7QUFDakQsb0RBQW9EO0FBQ3BELG9EQUFvRDtBQUNwRCxtQ0FBbUM7QUFDbkMsNkJBQTZCO0FBQzdCLHFCQUFxQjtBQUNyQixzQkFBc0I7QUFDdEIsc0JBQXNCO0FBQ3RCLHNCQUFzQjtBQUN0QixZQUFZO0FBQ1osa0JBQWtCO0FBQ2xCLEVBQUU7QUFDRiwrQkFBK0I7QUFDL0IsT0FBTztBQUNQLGdFQUFnRTtBQUNoRSxpRUFBaUU7QUFDakUsMkRBQTJEO0FBQzNELDJEQUEyRDtBQUMzRCw4Q0FBOEM7QUFDOUMsV0FBVztBQUNYLEVBQUU7QUFDRiw2QkFBNkI7QUFDN0IsT0FBTztBQUNQLDRCQUE0QjtBQUM1Qix5Q0FBeUM7QUFDekMsMENBQTBDO0FBQzFDLDRCQUE0QjtBQUM1QixRQUFRO0FBQ1IsRUFBRTtBQUNGLCtEQUErRDtBQUMvRCxFQUFFO0FBQ0YsbUNBQW1DO0FBQ25DLEVBQUU7QUFDRix3Q0FBd0M7QUFDeEMsd0tBQXdLO0FBQ3hLLG1DQUFtQztBQUNuQyxpREFBaUQ7QUFDakQsOERBQThEO0FBQzlELFFBQVE7QUFDUixpRUFBaUU7QUFDakUsb0dBQW9HO0FBQ3BHLGlFQUFpRTtBQUNqRSxjQUFjO0FBQ2QsUUFBUTtBQUNSLEVBQUU7QUFDRixzREFBc0Q7QUFDdEQsRUFBRTtBQUNGLDZFQUE2RTtBQUM3RSw4REFBOEQ7QUFDOUQsRUFBRTtBQUNGLDRCQUE0QjtBQUM1QixFQUFFO0FBQ0YsNkRBQTZEO0FBQzdELDhCQUE4QjtBQUM5Qiw4Q0FBOEM7QUFDOUMsVUFBVTtBQUNWLEVBQUU7QUFDRixRQUFRO0FBQ1IsRUFBRTtBQUNGLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyIvKmpzbGludCBub21lbjogdHJ1ZSwgbm9kZTogdHJ1ZSwgdW5wYXJhbTogdHJ1ZSwgd2hpdGU6IHRydWUqL1xuaW1wb3J0IHsgbXlzcWwgfSBmcm9tICdteXNxbCc7XG5pbXBvcnQgeyBleHByZXNzIH0gZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgeyBNeVNxbENvbm5lY3Rpb24gfSBmcm9tICcuLi9zZWx0ZXhpc3NlcnZlcmNvbmZpZy9kYmNvbm5lY3RteXNxbG5vZGUuanMnO1xubGV0IGFwcCA9IGV4cHJlc3M7XG5jb25zb2xlLmxvZyhNeVNxbENvbm5lY3Rpb24pO1xuLy9cbi8vIChmdW5jdGlvbiAoKSB7XG4vLyAgIFwidXNlIHN0cmljdFwiO1xuLy8gICAvLyB2YXIgdGVzdCA9IHJlcXVpcmUoJy4vdGVzdCcpO1xuLy8gICAvLyBjb25zb2xlLmxvZyh0ZXN0KTtcbi8vICAgLy8gcmV0dXJuO1xuLy9cbi8vICAgdmFyIGV4cHJlc3MgPSByZXF1aXJlKCdleHByZXNzJyksXG4vLyAgICAgLy8gY29va2llUGFyc2VyID0gcmVxdWlyZSgnY29va2llLXBhcnNlcicpLFxuLy8gICAgIGFwcCA9IGV4cHJlc3MoKSxcbi8vICAgICBteXNxbCA9IHJlcXVpcmUoJ215c3FsJyksXG4vLyAgICAgbXlzcWxDb25uZWN0aW9uID0gcmVxdWlyZShfX2Rpcm5hbWUgKyAnLy4uL3NlbHRleGlzc2VydmVyY29uZmlnL2RiY29ubmVjdG15c3Fsbm9kZS5qcycpLFxuLy8gICAgIC8vIG15RnVuY3Rpb25zID0gcmVxdWlyZSgnLi9teWZ1bmN0aW9ucycpLFxuLy8gICAgIC8vIGdldFRpbWVTdHJpbmcgPSBteUZ1bmN0aW9ucy5nZXRUaW1lU3RyaW5nLFxuLy8gICAgIC8vIGdldERhdGVTdHJpbmcgPSBteUZ1bmN0aW9ucy5nZXREYXRlU3RyaW5nLFxuLy8gICAgIC8vIGh0dHBzID0gcmVxdWlyZSgnaHR0cHMnKSxcbi8vICAgICAvLyBmcyA9IHJlcXVpcmUoJ2ZzJyksXG4vLyAgICAgLy8gcHJpdmF0ZUtleSxcbi8vICAgICAvLyBjZXJ0aWZpY2F0ZSxcbi8vICAgICAvLyBjcmVkZW50aWFscyxcbi8vICAgICAvLyBodHRwc1NlcnZlcjtcbi8vICAgICBodHRwLFxuLy8gICAgIGh0dHBTZXJ2ZXI7XG4vL1xuLy8gICAvL1VOQ09NTUVOVCBGT1IgcHJvZHVjdGlvblxuLy8gICAvL1xuLy8gICAvLyBwcml2YXRlS2V5ID0gZnMucmVhZEZpbGVTeW5jKF9fZGlybmFtZSArICcvLi4vc3NsLmtleScpO1xuLy8gICAvLyBjZXJ0aWZpY2F0ZSA9IGZzLnJlYWRGaWxlU3luYyhfX2Rpcm5hbWUgKyAnLy4uL3NzbC5jcnQnKTtcbi8vICAgLy8gY3JlZGVudGlhbHMgPSB7a2V5OiBwcml2YXRlS2V5LCBjZXJ0OiBjZXJ0aWZpY2F0ZX07XG4vLyAgIC8vIGh0dHBzU2VydmVyID0gaHR0cHMuY3JlYXRlU2VydmVyKGNyZWRlbnRpYWxzLCBhcHApO1xuLy8gICAvLyBodHRwc1NlcnZlci5saXN0ZW4oNTU1NSwgZnVuY3Rpb24gKCkge1xuLy8gICAvLyB9KTtcbi8vXG4vLyAgIC8vQ09NTUVOVCBGT1IgcHJvZHVjdGlvblxuLy8gICAvL1xuLy8gICBodHRwID0gcmVxdWlyZSgnaHR0cCcpO1xuLy8gICBodHRwU2VydmVyID0gaHR0cC5jcmVhdGVTZXJ2ZXIoYXBwKTtcbi8vICAgaHR0cFNlcnZlci5saXN0ZW4oNTU1NSwgZnVuY3Rpb24gKCkge1xuLy8gICAgIGNvbnNvbGUubG9nKCdzdGFydCcpO1xuLy8gICB9KTtcbi8vXG4vLyAgIGFwcC51c2UoJy9hc3NldHMnLCBleHByZXNzLnN0YXRpYyhfX2Rpcm5hbWUgKyAnL3B1YmxpYycpKTtcbi8vXG4vLyAgIGFwcC5zZXQoJ3ZpZXcgZW5naW5lJywgJ2VqcycpO1xuLy9cbi8vICAgYXBwLnVzZShmdW5jdGlvbiAocmVxLCByZXMsIG5leHQpIHtcbi8vICAgICB2YXIgYWxsb3dlZE9yaWdpbnMgPSBbJ2h0dHA6Ly8xLmxvY2FsJywgJ2h0dHBzOi8vZnZvbGNoZWsubmV0JywgJ2h0dHBzOi8vd3d3LmZ2b2xjaGVrLm5ldCcsICdodHRwOi8vbG9jYWxob3N0OjQyMDAnLCAnaHR0cDovL3NlbHRleC5ydScsICdodHRwOi8vd3d3LnNlbHRleC5ydSddLFxuLy8gICAgIG9yaWdpbiA9IHJlcS5oZWFkZXJzLm9yaWdpbjtcbi8vICAgICBpZiAoYWxsb3dlZE9yaWdpbnMuaW5kZXhPZihvcmlnaW4pID4gLTEpIHtcbi8vICAgICAgIHJlcy5zZXRIZWFkZXIoJ0FjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbicsIG9yaWdpbik7XG4vLyAgICAgfVxuLy8gICAgIC8vIHJlcy5oZWFkZXIoXCJBY2Nlc3MtQ29udHJvbC1BbGxvdy1DcmVkZW50aWFsc1wiLCBcInRydWVcIik7XG4vLyAgICAgcmVzLmhlYWRlcihcIkFjY2Vzcy1Db250cm9sLUFsbG93LUhlYWRlcnNcIiwgXCJPcmlnaW4sIFgtUmVxdWVzdGVkLVdpdGgsIENvbnRlbnQtVHlwZSwgQWNjZXB0XCIpO1xuLy8gICAgIHJlcy5oZWFkZXIoXCJBY2Nlc3MtQ29udHJvbC1BbGxvdy1NZXRob2RzXCIsIFwiREVMRVRFLCBQVVRcIik7XG4vLyAgICAgbmV4dCgpO1xuLy8gICB9KTtcbi8vXG4vLyAgIGFwcC5nZXQoJy9jYXRhbG9nLzpwYXJ0SWQnLCBmdW5jdGlvbiAocmVxLCByZXMpIHtcbi8vXG4vLyAgICAgdmFyIHF1ZXJ5ID0gXCJTRUxFQ1QgKiBGUk9NIGludmVudG9yeSBXSEVSRSBpZCA9IFwiICsgcmVxLnBhcmFtcy5wYXJ0SWQsXG4vLyAgICAgICBjb25uZWN0aW9uID0gbXlzcWwuY3JlYXRlQ29ubmVjdGlvbihteXNxbENvbm5lY3Rpb24pO1xuLy9cbi8vICAgICBjb25uZWN0aW9uLmNvbm5lY3QoKTtcbi8vXG4vLyAgICAgY29ubmVjdGlvbi5xdWVyeShxdWVyeSwgZnVuY3Rpb24gKGVyciwgcm93cywgZmllbGRzKSB7XG4vLyAgICAgICBjb25zb2xlLmxvZyhyb3dzWzBdKTtcbi8vICAgICAgIHJlcy5yZW5kZXIoJ2luZGV4Jywge3BhcnQ6IHJvd3NbMF19KTtcbi8vICAgICB9KTtcbi8vXG4vLyAgIH0pO1xuLy9cbi8vIH0oKSk7XG4iXX0=