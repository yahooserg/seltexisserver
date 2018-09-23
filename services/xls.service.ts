import * as xl from 'excel4node';
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

    let worksheet = workbook.addWorksheet('SeltexPrice');
    // let worksheet2 = workbook2.addWorksheet('SeltexPrice');

    let style = workbook.createStyle({
      font: {
        // color: '#FF0800',
        size: 12
      }
    });

    // let style2 = workbook2.createStyle({
    //   font: {
    //     // color: '#FF0800',
    //     size: 12
    //   }
    // });

    // numberFormat: '$#,##0.00; ($#,##0.00); -'
    worksheet.cell(1,1).string('id').style(style);
    worksheet.cell(1,2).string('name').style(style);
    worksheet.cell(1,3).string('manufacturer').style(style);
    worksheet.cell(1,4).string('main number').style(style);
    worksheet.cell(1,5).string('all numbers').style(style);
    worksheet.cell(1,6).string('price').style(style);
    worksheet.cell(1,7).string('stock msk').style(style);
    worksheet.cell(1,8).string('stock spb').style(style);
    worksheet.cell(1,9).string('in transit').style(style);

    // worksheet2.cell(1,1).string('manufacturer').style(style);
    // worksheet2.cell(1,2).string('number').style(style);
    // worksheet2.cell(1,3).string('crossmanufacturer').style(style);
    // worksheet2.cell(1,4).string('crossnumber').style(style);

    let priceUpdatedOnInfo: string = myFunctions.getDateString();
    worksheet.cell(1,10).string(`Updated: ${priceUpdatedOnInfo}`).style(style);


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

      worksheet.cell(i+2,1).number(data[i].id).style(style);
      worksheet.cell(i+2,2).string(`${data[i].description} ${data[i].comment}`).style(style);
      worksheet.cell(i+2,3).string(`${data[i].manufacturer}`).style(style);
      worksheet.cell(i+2,4).string(`${data[i].numberMain}`).style(style);
      worksheet.cell(i+2,5).string(`${data[i].numbersString}`).style(style);
      worksheet.cell(i+2,6).number(data[i].price).style(style);
      worksheet.cell(i+2,7).string(`${data[i].msk}`).style(style);
      worksheet.cell(i+2,8).string(`${data[i].stock}`).style(style);
      worksheet.cell(i+2,9).string(`${data[i].ordered}`).style(style);

    }

    // workbook.write('../../../www/seltex/seltexru/data/SeltexPrice.xlsx');
    workbook.write('../../../www/seltex/seltexru/data/seltexprice.xlsx', function(err, stats) {
      if (err) {
        console.error(err);
      } else {
        console.log(stats); // Prints out an instance of a node.js fs.Stats object
        callback();
      }
    });

  }

  public createXLCross(data, callback) {
    console.log("I AM IN CROSSSSSSSSS")
    let workbook = new xl.Workbook();
    let worksheet = workbook.addWorksheet('SeltexPrice');

    let style = workbook.createStyle({
      font: {
        // color: '#FF0800',
        size: 12
      }
    });




    worksheet.cell(1,1).string('manufacturer').style(style);
    worksheet.cell(1,2).string('number').style(style);
    worksheet.cell(1,3).string('crossmanufacturer').style(style);
    worksheet.cell(1,4).string('crossnumber').style(style);

    let priceUpdatedOnInfo: string = myFunctions.getDateString();
    worksheet.cell(1,5).string(`Updated: ${priceUpdatedOnInfo}`).style(style);

    let k: number = 0;
    for (let i: number = 0; i < data.length; i += 1) {
      for(let j: number = 1; j < data[i].numbers.length; j += 1) {
          worksheet.cell(k+2,1).string(`${data[i].numbers[0].manufacturerFullName}`).style(style);
          worksheet.cell(k+2,2).string(`${data[i].numbers[0].number}`).style(style);
          worksheet.cell(k+2,3).string(`${data[i].numbers[j].manufacturerFullName}`).style(style);
          worksheet.cell(k+2,4).string(`${data[i].numbers[j].number}`).style(style);
          k += 1;
      }
    }
    // workbook.write('../../../www/seltex/seltexru/data/SeltexCross.xlsx');
    workbook.write('../../../www/seltex/seltexru/data/seltexcross.xlsx', function(err, stats) {
      if (err) {
        console.error(err);
      } else {
        console.log("CROSS!!!!"); // Prints out an instance of a node.js fs.Stats object

        console.log(stats); // Prints out an instance of a node.js fs.Stats object
        callback();
      }
    });

  }

}
