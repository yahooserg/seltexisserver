import * as xl from 'exceljs';
import { MyFunctions } from './functions.service';
const myFunctions = new MyFunctions();
// const xl = new XL();

export class MyXLService {

  constructor(
  ) {
  }

  public createXLPrice(data, callback) {
    console.log("I AM IN PRICE")

    let workbook = new xl.Workbook();
    // let workbook2 = new xl.Workbook();
    workbook.views = [
      {
        x: 0, y: 0, width: 10000, height: 20000,
        firstSheet: 0, activeTab: 1, visibility: 'visible'
      }
    ]

    let worksheet = workbook.addWorksheet('SeltexPrice');
    // let worksheet2 = workbook2.addWorksheet('SeltexPrice');
    let priceUpdatedOnInfo: string = `Updated: ${myFunctions.getDateString()}`;
    worksheet.addRow(["id","name","manufacturer", "main number", "all numbers", "price", "stock msk", "stock spb", "transit", priceUpdatedOnInfo]);





    for (let i: number = 0; i < data.length; i += 1) {
      data[i].numbersString = "";

      for(let j: number = 0; j < data[i].numbers.length; j += 1) {
        if(j === 0) {
          data[i].manufacturer = data[i].numbers[j].manufacturerFullName;
          data[i].numberMain = data[i].numbers[j].number;
          data[i].numbersString += `${data[i].numbers[j].number}`;
        } else {
          data[i].numbersString += ` / ${data[i].numbers[j].number}`;
        }
      }
      if (data[i].stock > 12) {
        data[i].stock = ">12";
      } else {
        data[i].stock = `${data[i].stock}`;
      }

      if (data[i].msk > 12) {
        data[i].msk = ">12";
      } else {
        data[i].msk = `${data[i].msk}`;
      }

      if (data[i].ordered > 12) {
        data[i].ordered = ">12";
      } else {
        data[i].ordered = `${data[i].ordered}`;
      }

      worksheet.addRow([data[i].id,`${data[i].description} ${data[i].comment}`,`${data[i].manufacturer}`, `${data[i].numberMain}`, `${data[i].numbersString}`, data[i].price, `${data[i].msk}`, `${data[i].stock}`, `${data[i].ordered}`]);

    }

    workbook.xlsx.writeFile("../../../www/seltex/seltexru/data/seltexcross.xlsx")
    .then(function() {
        callback();
    });

    //
    // // workbook.write('../../../www/seltex/seltexru/data/SeltexPrice.xlsx');
    // workbook.write('../../../www/seltex/seltexru/data/seltexprice.xlsx', function(err, stats) {
    //   if (err) {
    //     console.error(err);
    //   } else {
    //     console.log(stats); // Prints out an instance of a node.js fs.Stats object
    //     callback();
    //   }
    // });

  }

  // public createXLCross(data, callback) {
  //   console.log("I AM IN CROSSSSSSSSS")
  //   let workbook = new xl.Workbook();
  //   let worksheet = workbook.addWorksheet('SeltexPrice');
  //
  //   let style = workbook.createStyle({
  //     font: {
  //       // color: '#FF0800',
  //       size: 12
  //     }
  //   });
  //
  //
  //
  //
  //   worksheet.cell(1,1).string('manufacturer').style(style);
  //   worksheet.cell(1,2).string('number').style(style);
  //   worksheet.cell(1,3).string('crossmanufacturer').style(style);
  //   worksheet.cell(1,4).string('crossnumber').style(style);
  //
  //   let priceUpdatedOnInfo: string = myFunctions.getDateString();
  //   worksheet.cell(1,5).string(`Updated: ${priceUpdatedOnInfo}`).style(style);
  //
  //   let k: number = 0;
  //   for (let i: number = 0; i < data.length; i += 1) {
  //     for(let j: number = 1; j < data[i].numbers.length; j += 1) {
  //         worksheet.cell(k+2,1).string(`${data[i].numbers[0].manufacturerFullName}`).style(style);
  //         worksheet.cell(k+2,2).string(`${data[i].numbers[0].number}`).style(style);
  //         worksheet.cell(k+2,3).string(`${data[i].numbers[j].manufacturerFullName}`).style(style);
  //         worksheet.cell(k+2,4).string(`${data[i].numbers[j].number}`).style(style);
  //         k += 1;
  //     }
  //   }
  //   // workbook.write('../../../www/seltex/seltexru/data/SeltexCross.xlsx');
  //   workbook.write('../../../www/seltex/seltexru/data/seltexcross.xlsx', function(err, stats) {
  //     if (err) {
  //       console.error(err);
  //     } else {
  //       console.log("CROSS!!!!"); // Prints out an instance of a node.js fs.Stats object
  //
  //       console.log(stats); // Prints out an instance of a node.js fs.Stats object
  //       callback();
  //     }
  //   });
  //
  // }

}
