import * as xl from 'excel4node';
import {MyAWSService} from './aws.service';
const myAWSService = new MyAWSService();


export class MyXLService {

  constructor(
  ) {
  }

  public createXLPrice(data) {
    myAWSService.uploadPrice(data);
  }


}
