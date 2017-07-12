"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var dbconnectmysqlnode_js_1 = require("../seltexisserverconfig/dbconnectmysqlnode.js");
var app = express();
var mySqlConnection = new dbconnectmysqlnode_js_1.MySqlConnection;
console.log(mySqlConnection);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL1VzZXJzL3NlcmdlaS9PbmVEcml2ZS9Eb2N1bWVudHMvMS5Xb3JrL3NvZnQvcHJvamVjdHMvc2VsdGV4aXMvc2VydmVyL3NlbHRleGlzc2VydmVyL3NlcnZlci50cyIsInNvdXJjZXMiOlsiL1VzZXJzL3NlcmdlaS9PbmVEcml2ZS9Eb2N1bWVudHMvMS5Xb3JrL3NvZnQvcHJvamVjdHMvc2VsdGV4aXMvc2VydmVyL3NlbHRleGlzc2VydmVyL3NlcnZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLGlDQUFtQztBQUVuQyx1RkFBZ0Y7QUFDaEYsSUFBTSxHQUFHLEdBQWdCLE9BQU8sRUFBRSxDQUFDO0FBQ25DLElBQUksZUFBZSxHQUFHLElBQUksdUNBQWUsQ0FBQztBQUMxQyxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0FBQzdCLEVBQUU7QUFDRixpQkFBaUI7QUFDakIsa0JBQWtCO0FBQ2xCLHFDQUFxQztBQUNyQywwQkFBMEI7QUFDMUIsZUFBZTtBQUNmLEVBQUU7QUFDRixzQ0FBc0M7QUFDdEMsa0RBQWtEO0FBQ2xELHVCQUF1QjtBQUN2QixnQ0FBZ0M7QUFDaEMsK0ZBQStGO0FBQy9GLGlEQUFpRDtBQUNqRCxvREFBb0Q7QUFDcEQsb0RBQW9EO0FBQ3BELG1DQUFtQztBQUNuQyw2QkFBNkI7QUFDN0IscUJBQXFCO0FBQ3JCLHNCQUFzQjtBQUN0QixzQkFBc0I7QUFDdEIsc0JBQXNCO0FBQ3RCLFlBQVk7QUFDWixrQkFBa0I7QUFDbEIsRUFBRTtBQUNGLCtCQUErQjtBQUMvQixPQUFPO0FBQ1AsZ0VBQWdFO0FBQ2hFLGlFQUFpRTtBQUNqRSwyREFBMkQ7QUFDM0QsMkRBQTJEO0FBQzNELDhDQUE4QztBQUM5QyxXQUFXO0FBQ1gsRUFBRTtBQUNGLDZCQUE2QjtBQUM3QixPQUFPO0FBQ1AsNEJBQTRCO0FBQzVCLHlDQUF5QztBQUN6QywwQ0FBMEM7QUFDMUMsNEJBQTRCO0FBQzVCLFFBQVE7QUFDUixFQUFFO0FBQ0YsK0RBQStEO0FBQy9ELEVBQUU7QUFDRixtQ0FBbUM7QUFDbkMsRUFBRTtBQUNGLHdDQUF3QztBQUN4Qyx3S0FBd0s7QUFDeEssbUNBQW1DO0FBQ25DLGlEQUFpRDtBQUNqRCw4REFBOEQ7QUFDOUQsUUFBUTtBQUNSLGlFQUFpRTtBQUNqRSxvR0FBb0c7QUFDcEcsaUVBQWlFO0FBQ2pFLGNBQWM7QUFDZCxRQUFRO0FBQ1IsRUFBRTtBQUNGLHNEQUFzRDtBQUN0RCxFQUFFO0FBQ0YsNkVBQTZFO0FBQzdFLDhEQUE4RDtBQUM5RCxFQUFFO0FBQ0YsNEJBQTRCO0FBQzVCLEVBQUU7QUFDRiw2REFBNkQ7QUFDN0QsOEJBQThCO0FBQzlCLDhDQUE4QztBQUM5QyxVQUFVO0FBQ1YsRUFBRTtBQUNGLFFBQVE7QUFDUixFQUFFO0FBQ0YsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIG15c3FsIGZyb20gJ215c3FsJztcbmltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgeyBBcHBsaWNhdGlvbiB9IGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IHsgTXlTcWxDb25uZWN0aW9uIH0gZnJvbSAnLi4vc2VsdGV4aXNzZXJ2ZXJjb25maWcvZGJjb25uZWN0bXlzcWxub2RlLmpzJztcbmNvbnN0IGFwcDogQXBwbGljYXRpb24gPSBleHByZXNzKCk7XG5sZXQgbXlTcWxDb25uZWN0aW9uID0gbmV3IE15U3FsQ29ubmVjdGlvbjtcbmNvbnNvbGUubG9nKG15U3FsQ29ubmVjdGlvbik7XG4vL1xuLy8gKGZ1bmN0aW9uICgpIHtcbi8vICAgXCJ1c2Ugc3RyaWN0XCI7XG4vLyAgIC8vIHZhciB0ZXN0ID0gcmVxdWlyZSgnLi90ZXN0Jyk7XG4vLyAgIC8vIGNvbnNvbGUubG9nKHRlc3QpO1xuLy8gICAvLyByZXR1cm47XG4vL1xuLy8gICB2YXIgZXhwcmVzcyA9IHJlcXVpcmUoJ2V4cHJlc3MnKSxcbi8vICAgICAvLyBjb29raWVQYXJzZXIgPSByZXF1aXJlKCdjb29raWUtcGFyc2VyJyksXG4vLyAgICAgYXBwID0gZXhwcmVzcygpLFxuLy8gICAgIG15c3FsID0gcmVxdWlyZSgnbXlzcWwnKSxcbi8vICAgICBteXNxbENvbm5lY3Rpb24gPSByZXF1aXJlKF9fZGlybmFtZSArICcvLi4vc2VsdGV4aXNzZXJ2ZXJjb25maWcvZGJjb25uZWN0bXlzcWxub2RlLmpzJyksXG4vLyAgICAgLy8gbXlGdW5jdGlvbnMgPSByZXF1aXJlKCcuL215ZnVuY3Rpb25zJyksXG4vLyAgICAgLy8gZ2V0VGltZVN0cmluZyA9IG15RnVuY3Rpb25zLmdldFRpbWVTdHJpbmcsXG4vLyAgICAgLy8gZ2V0RGF0ZVN0cmluZyA9IG15RnVuY3Rpb25zLmdldERhdGVTdHJpbmcsXG4vLyAgICAgLy8gaHR0cHMgPSByZXF1aXJlKCdodHRwcycpLFxuLy8gICAgIC8vIGZzID0gcmVxdWlyZSgnZnMnKSxcbi8vICAgICAvLyBwcml2YXRlS2V5LFxuLy8gICAgIC8vIGNlcnRpZmljYXRlLFxuLy8gICAgIC8vIGNyZWRlbnRpYWxzLFxuLy8gICAgIC8vIGh0dHBzU2VydmVyO1xuLy8gICAgIGh0dHAsXG4vLyAgICAgaHR0cFNlcnZlcjtcbi8vXG4vLyAgIC8vVU5DT01NRU5UIEZPUiBwcm9kdWN0aW9uXG4vLyAgIC8vXG4vLyAgIC8vIHByaXZhdGVLZXkgPSBmcy5yZWFkRmlsZVN5bmMoX19kaXJuYW1lICsgJy8uLi9zc2wua2V5Jyk7XG4vLyAgIC8vIGNlcnRpZmljYXRlID0gZnMucmVhZEZpbGVTeW5jKF9fZGlybmFtZSArICcvLi4vc3NsLmNydCcpO1xuLy8gICAvLyBjcmVkZW50aWFscyA9IHtrZXk6IHByaXZhdGVLZXksIGNlcnQ6IGNlcnRpZmljYXRlfTtcbi8vICAgLy8gaHR0cHNTZXJ2ZXIgPSBodHRwcy5jcmVhdGVTZXJ2ZXIoY3JlZGVudGlhbHMsIGFwcCk7XG4vLyAgIC8vIGh0dHBzU2VydmVyLmxpc3Rlbig1NTU1LCBmdW5jdGlvbiAoKSB7XG4vLyAgIC8vIH0pO1xuLy9cbi8vICAgLy9DT01NRU5UIEZPUiBwcm9kdWN0aW9uXG4vLyAgIC8vXG4vLyAgIGh0dHAgPSByZXF1aXJlKCdodHRwJyk7XG4vLyAgIGh0dHBTZXJ2ZXIgPSBodHRwLmNyZWF0ZVNlcnZlcihhcHApO1xuLy8gICBodHRwU2VydmVyLmxpc3Rlbig1NTU1LCBmdW5jdGlvbiAoKSB7XG4vLyAgICAgY29uc29sZS5sb2coJ3N0YXJ0Jyk7XG4vLyAgIH0pO1xuLy9cbi8vICAgYXBwLnVzZSgnL2Fzc2V0cycsIGV4cHJlc3Muc3RhdGljKF9fZGlybmFtZSArICcvcHVibGljJykpO1xuLy9cbi8vICAgYXBwLnNldCgndmlldyBlbmdpbmUnLCAnZWpzJyk7XG4vL1xuLy8gICBhcHAudXNlKGZ1bmN0aW9uIChyZXEsIHJlcywgbmV4dCkge1xuLy8gICAgIHZhciBhbGxvd2VkT3JpZ2lucyA9IFsnaHR0cDovLzEubG9jYWwnLCAnaHR0cHM6Ly9mdm9sY2hlay5uZXQnLCAnaHR0cHM6Ly93d3cuZnZvbGNoZWsubmV0JywgJ2h0dHA6Ly9sb2NhbGhvc3Q6NDIwMCcsICdodHRwOi8vc2VsdGV4LnJ1JywgJ2h0dHA6Ly93d3cuc2VsdGV4LnJ1J10sXG4vLyAgICAgb3JpZ2luID0gcmVxLmhlYWRlcnMub3JpZ2luO1xuLy8gICAgIGlmIChhbGxvd2VkT3JpZ2lucy5pbmRleE9mKG9yaWdpbikgPiAtMSkge1xuLy8gICAgICAgcmVzLnNldEhlYWRlcignQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJywgb3JpZ2luKTtcbi8vICAgICB9XG4vLyAgICAgLy8gcmVzLmhlYWRlcihcIkFjY2Vzcy1Db250cm9sLUFsbG93LUNyZWRlbnRpYWxzXCIsIFwidHJ1ZVwiKTtcbi8vICAgICByZXMuaGVhZGVyKFwiQWNjZXNzLUNvbnRyb2wtQWxsb3ctSGVhZGVyc1wiLCBcIk9yaWdpbiwgWC1SZXF1ZXN0ZWQtV2l0aCwgQ29udGVudC1UeXBlLCBBY2NlcHRcIik7XG4vLyAgICAgcmVzLmhlYWRlcihcIkFjY2Vzcy1Db250cm9sLUFsbG93LU1ldGhvZHNcIiwgXCJERUxFVEUsIFBVVFwiKTtcbi8vICAgICBuZXh0KCk7XG4vLyAgIH0pO1xuLy9cbi8vICAgYXBwLmdldCgnL2NhdGFsb2cvOnBhcnRJZCcsIGZ1bmN0aW9uIChyZXEsIHJlcykge1xuLy9cbi8vICAgICB2YXIgcXVlcnkgPSBcIlNFTEVDVCAqIEZST00gaW52ZW50b3J5IFdIRVJFIGlkID0gXCIgKyByZXEucGFyYW1zLnBhcnRJZCxcbi8vICAgICAgIGNvbm5lY3Rpb24gPSBteXNxbC5jcmVhdGVDb25uZWN0aW9uKG15c3FsQ29ubmVjdGlvbik7XG4vL1xuLy8gICAgIGNvbm5lY3Rpb24uY29ubmVjdCgpO1xuLy9cbi8vICAgICBjb25uZWN0aW9uLnF1ZXJ5KHF1ZXJ5LCBmdW5jdGlvbiAoZXJyLCByb3dzLCBmaWVsZHMpIHtcbi8vICAgICAgIGNvbnNvbGUubG9nKHJvd3NbMF0pO1xuLy8gICAgICAgcmVzLnJlbmRlcignaW5kZXgnLCB7cGFydDogcm93c1swXX0pO1xuLy8gICAgIH0pO1xuLy9cbi8vICAgfSk7XG4vL1xuLy8gfSgpKTtcbiJdfQ==