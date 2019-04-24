let ctt = require('cyrillic-to-translit-js');

export class MyFunctions {

  constructor() {

  }

  public getRidOfEmptyItems (arr) {
    for (let i = 0; i < arr.length; i += 1) {
      if (!arr[i]) {
        arr.splice(i,1);
        i -= 1;
      }
    }
    return arr;
  }

  public getDateString () {
    let date: Date = new Date();
    let minutes: any = date.getMinutes();
    let seconds: any = date.getSeconds();
    if (minutes < 10) {
      minutes = `0${minutes}`
    }
    if (seconds < 10) {
      seconds = `0${seconds}`
    }
    return `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()} ${date.getHours()+3}:${minutes}:${seconds}`;

  }

  public createComplicatedQuery (arr) {
    var i,
      str = '',
      catStr = '',
      getCatPart = function (str) {
        return str.slice(0, str.length-4) + '-' + str.slice(str.length-4);
      },
      checkIfCat = function (str) {
        var regex = /^[A-Za-z0-9]{2,3}[0-9]{4}$/i;
        if (regex.test(str)) {
          return true;
        }
        return false;
      },
      countCatParts = false;

    for (i = 0; i < arr.length; i += 1) {
      //search query with cat style (with'-') or without it
      if (checkIfCat(arr[i])) {
        countCatParts = true;
        if (i === 0) {
          str = "(Description like N'%"+arr[i]+"%' or Numbers like '%"+arr[i]+"%')";
          catStr = "(Description like N'%"+getCatPart(arr[i])+"%' or Numbers like '%"+getCatPart(arr[i])+"%')";
        } else {
          str = str + " AND (Description like N'%"+arr[i]+"%' or Numbers like '%"+arr[i]+"%')";
          catStr = catStr + " AND (Description like N'%"+getCatPart(arr[i])+"%' or Numbers like '%"+getCatPart(arr[i])+"%')";
        }
      } else {
        if (i === 0) {
          str = "(Description like N'%"+arr[i]+"%' or Numbers like '%"+arr[i]+"%')";
          catStr = "(Description like N'%"+arr[i]+"%' or Numbers like '%"+arr[i]+"%')";
        } else {
          str = str + " AND (Description like N'%"+arr[i]+"%' or Numbers like '%"+arr[i]+"%')";
          catStr = catStr + " AND (Description like N'%"+arr[i]+"%' or Numbers like '%"+arr[i]+"%')";
        }
      }
    }
    str = "SELECT p.ID as id, p.Description AS description, p.Price as price, p.Numbers AS numbers, p.stock as stock, p.ordered as ordered, p.msk as msk, p.link as link from inventory1s as p where (" + str + ")";
    if (countCatParts) {
      str = str + " or (" + catStr + ")";
    }
    str = str + " and description not like N'я%' order by p.Description";
    return str;
  }

  public getRecommendedUrlForItem (row, callback) {
    row.descriptionURL = row.description.text.replace(/\-/g,'');
    row.descriptionURL = ctt().transform(row.descriptionURL, "-");
    row.descriptionURL = row.descriptionURL.toLowerCase();
    row.descriptionURL = row.descriptionURL.replace(/r\/k/g,'remkomplekt');
    row.descriptionURL = row.descriptionURL.replace(/\//g,'-');
    row.descriptionURL = row.descriptionURL.replace(/\\/g,'-');
    row.descriptionURL = row.descriptionURL.replace(/\(|\)|\,|\.|\'/g,'');
    row.descriptionURL = row.descriptionURL.replace(/\-\-/g,'-');
    row.descriptionURL = row.descriptionURL.replace(/\-\-/g,'-');
    row.descriptionURL = row.descriptionURL.replace(/\-kt/g,'-komplekt');

    row.commentURL = row.comment.text.replace(/\-/g,'');
    row.commentURL = ctt().transform(row.commentURL, "-");
    row.commentURL = row.commentURL.replace(/r\/k/g,'remkomplekt');
    row.commentURL = row.commentURL.replace(/\//g,'-');
    row.commentURL = row.commentURL.replace(/\\/g,'-');
    row.commentURL = row.commentURL.replace(/\(|\)|\,|\.|\'/g,'');
    row.commentURL = row.commentURL.replace(/\-\-/g,'-');
    row.commentURL = row.commentURL.replace(/\-\-/g,'-');
    row.commentURL = row.commentURL.replace(/-kt/g,'-komplekt');
    if(row.numbers.length) {
      row.number = row.numbers[0].number.replace(/\ /g,'-');
      row.mName = row.numbers[0].manufacturerFullName.replace(/\ /g,'-');


      row.url = `${row.descriptionURL}-${row.commentURL}`;
      if (row.numbers[0].manufacturerID === 1) {
        row.url += `-${row.number}-caterpillar`;
      }  else if (row.numbers[0].manufacturerID === 5) {
        row.url += `-${row.number}-costex-ctp`;
      } else {
        row.url += `-${row.number}-${row.mName}`;
      }

      for (let i = 1; i < row.numbers.length; i += 1) {
        row.url += `-${row.numbers[i].number}`;
      }
    }
    // console.log(row.url);
    callback(row.url);
  }

}
