import {AWSConfig} from '../../seltexisserverconfig/awsconfig';
const awsConfig = new AWSConfig();
import AWS = require('aws-sdk');

AWS.config.update({
    accessKeyId: awsConfig.id,
    secretAccessKey: awsConfig.key
});

const s3 = new AWS.S3();


export class MyAWSService {

  constructor() {

  }

  public uploadPrice(data, callback) {


    s3.putObject({
      Bucket: 'pricelist.seltex.ru',
      Key: 'SeltexPrice.xlsx',
      Body: data,
      ACL: 'public-read'
    },function (err, data) {
      if (err) {
        callback(err);
      }
      if (data) {
        console.log('Successfully uploaded package.');
        callback(data)

      }
    });
  }


}
