"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var app = express_1.express;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL1VzZXJzL3NlcmdlaS9PbmVEcml2ZS9Eb2N1bWVudHMvMS5Xb3JrL3NvZnQvcHJvamVjdHMvc2VsdGV4aXMvc2VydmVyL3NlbHRleGlzc2VydmVyL3NlcnZlci50cyIsInNvdXJjZXMiOlsiL1VzZXJzL3NlcmdlaS9PbmVEcml2ZS9Eb2N1bWVudHMvMS5Xb3JrL3NvZnQvcHJvamVjdHMvc2VsdGV4aXMvc2VydmVyL3NlbHRleGlzc2VydmVyL3NlcnZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLG1DQUFrQztBQUVsQyxJQUFJLEdBQUcsR0FBRyxpQkFBTyxDQUFDO0FBQ2xCLEVBQUU7QUFDRixpQkFBaUI7QUFDakIsa0JBQWtCO0FBQ2xCLHFDQUFxQztBQUNyQywwQkFBMEI7QUFDMUIsZUFBZTtBQUNmLEVBQUU7QUFDRixzQ0FBc0M7QUFDdEMsa0RBQWtEO0FBQ2xELHVCQUF1QjtBQUN2QixnQ0FBZ0M7QUFDaEMsK0ZBQStGO0FBQy9GLGlEQUFpRDtBQUNqRCxvREFBb0Q7QUFDcEQsb0RBQW9EO0FBQ3BELG1DQUFtQztBQUNuQyw2QkFBNkI7QUFDN0IscUJBQXFCO0FBQ3JCLHNCQUFzQjtBQUN0QixzQkFBc0I7QUFDdEIsc0JBQXNCO0FBQ3RCLFlBQVk7QUFDWixrQkFBa0I7QUFDbEIsRUFBRTtBQUNGLCtCQUErQjtBQUMvQixPQUFPO0FBQ1AsZ0VBQWdFO0FBQ2hFLGlFQUFpRTtBQUNqRSwyREFBMkQ7QUFDM0QsMkRBQTJEO0FBQzNELDhDQUE4QztBQUM5QyxXQUFXO0FBQ1gsRUFBRTtBQUNGLDZCQUE2QjtBQUM3QixPQUFPO0FBQ1AsNEJBQTRCO0FBQzVCLHlDQUF5QztBQUN6QywwQ0FBMEM7QUFDMUMsNEJBQTRCO0FBQzVCLFFBQVE7QUFDUixFQUFFO0FBQ0YsK0RBQStEO0FBQy9ELEVBQUU7QUFDRixtQ0FBbUM7QUFDbkMsRUFBRTtBQUNGLHdDQUF3QztBQUN4Qyx3S0FBd0s7QUFDeEssbUNBQW1DO0FBQ25DLGlEQUFpRDtBQUNqRCw4REFBOEQ7QUFDOUQsUUFBUTtBQUNSLGlFQUFpRTtBQUNqRSxvR0FBb0c7QUFDcEcsaUVBQWlFO0FBQ2pFLGNBQWM7QUFDZCxRQUFRO0FBQ1IsRUFBRTtBQUNGLHNEQUFzRDtBQUN0RCxFQUFFO0FBQ0YsNkVBQTZFO0FBQzdFLDhEQUE4RDtBQUM5RCxFQUFFO0FBQ0YsNEJBQTRCO0FBQzVCLEVBQUU7QUFDRiw2REFBNkQ7QUFDN0QsOEJBQThCO0FBQzlCLDhDQUE4QztBQUM5QyxVQUFVO0FBQ1YsRUFBRTtBQUNGLFFBQVE7QUFDUixFQUFFO0FBQ0YsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbIi8qanNsaW50IG5vbWVuOiB0cnVlLCBub2RlOiB0cnVlLCB1bnBhcmFtOiB0cnVlLCB3aGl0ZTogdHJ1ZSovXG5pbXBvcnQgeyBteXNxbCB9IGZyb20gJ215c3FsJztcbmltcG9ydCB7IGV4cHJlc3MgfSBmcm9tICdleHByZXNzJztcbmltcG9ydCB7IE15U3FsQ29ubmVjdGlvbiB9IGZyb20gJy4uL3NlbHRleGlzc2VydmVyY29uZmlnL2RiY29ubmVjdG15c3Fsbm9kZS5qcyc7XG5sZXQgYXBwID0gZXhwcmVzcztcbi8vXG4vLyAoZnVuY3Rpb24gKCkge1xuLy8gICBcInVzZSBzdHJpY3RcIjtcbi8vICAgLy8gdmFyIHRlc3QgPSByZXF1aXJlKCcuL3Rlc3QnKTtcbi8vICAgLy8gY29uc29sZS5sb2codGVzdCk7XG4vLyAgIC8vIHJldHVybjtcbi8vXG4vLyAgIHZhciBleHByZXNzID0gcmVxdWlyZSgnZXhwcmVzcycpLFxuLy8gICAgIC8vIGNvb2tpZVBhcnNlciA9IHJlcXVpcmUoJ2Nvb2tpZS1wYXJzZXInKSxcbi8vICAgICBhcHAgPSBleHByZXNzKCksXG4vLyAgICAgbXlzcWwgPSByZXF1aXJlKCdteXNxbCcpLFxuLy8gICAgIG15c3FsQ29ubmVjdGlvbiA9IHJlcXVpcmUoX19kaXJuYW1lICsgJy8uLi9zZWx0ZXhpc3NlcnZlcmNvbmZpZy9kYmNvbm5lY3RteXNxbG5vZGUuanMnKSxcbi8vICAgICAvLyBteUZ1bmN0aW9ucyA9IHJlcXVpcmUoJy4vbXlmdW5jdGlvbnMnKSxcbi8vICAgICAvLyBnZXRUaW1lU3RyaW5nID0gbXlGdW5jdGlvbnMuZ2V0VGltZVN0cmluZyxcbi8vICAgICAvLyBnZXREYXRlU3RyaW5nID0gbXlGdW5jdGlvbnMuZ2V0RGF0ZVN0cmluZyxcbi8vICAgICAvLyBodHRwcyA9IHJlcXVpcmUoJ2h0dHBzJyksXG4vLyAgICAgLy8gZnMgPSByZXF1aXJlKCdmcycpLFxuLy8gICAgIC8vIHByaXZhdGVLZXksXG4vLyAgICAgLy8gY2VydGlmaWNhdGUsXG4vLyAgICAgLy8gY3JlZGVudGlhbHMsXG4vLyAgICAgLy8gaHR0cHNTZXJ2ZXI7XG4vLyAgICAgaHR0cCxcbi8vICAgICBodHRwU2VydmVyO1xuLy9cbi8vICAgLy9VTkNPTU1FTlQgRk9SIHByb2R1Y3Rpb25cbi8vICAgLy9cbi8vICAgLy8gcHJpdmF0ZUtleSA9IGZzLnJlYWRGaWxlU3luYyhfX2Rpcm5hbWUgKyAnLy4uL3NzbC5rZXknKTtcbi8vICAgLy8gY2VydGlmaWNhdGUgPSBmcy5yZWFkRmlsZVN5bmMoX19kaXJuYW1lICsgJy8uLi9zc2wuY3J0Jyk7XG4vLyAgIC8vIGNyZWRlbnRpYWxzID0ge2tleTogcHJpdmF0ZUtleSwgY2VydDogY2VydGlmaWNhdGV9O1xuLy8gICAvLyBodHRwc1NlcnZlciA9IGh0dHBzLmNyZWF0ZVNlcnZlcihjcmVkZW50aWFscywgYXBwKTtcbi8vICAgLy8gaHR0cHNTZXJ2ZXIubGlzdGVuKDU1NTUsIGZ1bmN0aW9uICgpIHtcbi8vICAgLy8gfSk7XG4vL1xuLy8gICAvL0NPTU1FTlQgRk9SIHByb2R1Y3Rpb25cbi8vICAgLy9cbi8vICAgaHR0cCA9IHJlcXVpcmUoJ2h0dHAnKTtcbi8vICAgaHR0cFNlcnZlciA9IGh0dHAuY3JlYXRlU2VydmVyKGFwcCk7XG4vLyAgIGh0dHBTZXJ2ZXIubGlzdGVuKDU1NTUsIGZ1bmN0aW9uICgpIHtcbi8vICAgICBjb25zb2xlLmxvZygnc3RhcnQnKTtcbi8vICAgfSk7XG4vL1xuLy8gICBhcHAudXNlKCcvYXNzZXRzJywgZXhwcmVzcy5zdGF0aWMoX19kaXJuYW1lICsgJy9wdWJsaWMnKSk7XG4vL1xuLy8gICBhcHAuc2V0KCd2aWV3IGVuZ2luZScsICdlanMnKTtcbi8vXG4vLyAgIGFwcC51c2UoZnVuY3Rpb24gKHJlcSwgcmVzLCBuZXh0KSB7XG4vLyAgICAgdmFyIGFsbG93ZWRPcmlnaW5zID0gWydodHRwOi8vMS5sb2NhbCcsICdodHRwczovL2Z2b2xjaGVrLm5ldCcsICdodHRwczovL3d3dy5mdm9sY2hlay5uZXQnLCAnaHR0cDovL2xvY2FsaG9zdDo0MjAwJywgJ2h0dHA6Ly9zZWx0ZXgucnUnLCAnaHR0cDovL3d3dy5zZWx0ZXgucnUnXSxcbi8vICAgICBvcmlnaW4gPSByZXEuaGVhZGVycy5vcmlnaW47XG4vLyAgICAgaWYgKGFsbG93ZWRPcmlnaW5zLmluZGV4T2Yob3JpZ2luKSA+IC0xKSB7XG4vLyAgICAgICByZXMuc2V0SGVhZGVyKCdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nLCBvcmlnaW4pO1xuLy8gICAgIH1cbi8vICAgICAvLyByZXMuaGVhZGVyKFwiQWNjZXNzLUNvbnRyb2wtQWxsb3ctQ3JlZGVudGlhbHNcIiwgXCJ0cnVlXCIpO1xuLy8gICAgIHJlcy5oZWFkZXIoXCJBY2Nlc3MtQ29udHJvbC1BbGxvdy1IZWFkZXJzXCIsIFwiT3JpZ2luLCBYLVJlcXVlc3RlZC1XaXRoLCBDb250ZW50LVR5cGUsIEFjY2VwdFwiKTtcbi8vICAgICByZXMuaGVhZGVyKFwiQWNjZXNzLUNvbnRyb2wtQWxsb3ctTWV0aG9kc1wiLCBcIkRFTEVURSwgUFVUXCIpO1xuLy8gICAgIG5leHQoKTtcbi8vICAgfSk7XG4vL1xuLy8gICBhcHAuZ2V0KCcvY2F0YWxvZy86cGFydElkJywgZnVuY3Rpb24gKHJlcSwgcmVzKSB7XG4vL1xuLy8gICAgIHZhciBxdWVyeSA9IFwiU0VMRUNUICogRlJPTSBpbnZlbnRvcnkgV0hFUkUgaWQgPSBcIiArIHJlcS5wYXJhbXMucGFydElkLFxuLy8gICAgICAgY29ubmVjdGlvbiA9IG15c3FsLmNyZWF0ZUNvbm5lY3Rpb24obXlzcWxDb25uZWN0aW9uKTtcbi8vXG4vLyAgICAgY29ubmVjdGlvbi5jb25uZWN0KCk7XG4vL1xuLy8gICAgIGNvbm5lY3Rpb24ucXVlcnkocXVlcnksIGZ1bmN0aW9uIChlcnIsIHJvd3MsIGZpZWxkcykge1xuLy8gICAgICAgY29uc29sZS5sb2cocm93c1swXSk7XG4vLyAgICAgICByZXMucmVuZGVyKCdpbmRleCcsIHtwYXJ0OiByb3dzWzBdfSk7XG4vLyAgICAgfSk7XG4vL1xuLy8gICB9KTtcbi8vXG4vLyB9KCkpO1xuIl19