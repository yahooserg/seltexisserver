import * as fs from 'fs';
import {FsConfig} from '../../seltexisserverconfig/fsconfig';
const fsConfig = new FsConfig();

export class MyFileService {

  constructor() {

  }

  public updateImage(company, image, partId, callback) {

    let file = `${__dirname}/${fsConfig.workDir}${company}-${partId}.png`;
    image = image.replace(/^data:;base64,/, "");
    image = Buffer.from(image, 'base64')
    // console.log('img: ',image);
    fs.writeFile(file, image, (err)=>{
      if (err) {
        callback({error:true})
      } else {
        callback({done:true})
      }
    });
  }

}
