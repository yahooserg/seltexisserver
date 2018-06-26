import S3 = require('aws-sdk/clients/s3');

export class MyAWSService {

  constructor() {

  }

  public uploadPrice(data, callback) {
    console.log(data);
    callback(data);
  }


}
