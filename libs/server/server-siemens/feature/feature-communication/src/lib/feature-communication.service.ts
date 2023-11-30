// @ts-ignore: Unreachable code error
import { S7Endpoint, S7ItemGroup, S7Connection } from '@st-one-io/nodes7';
import { Injectable } from '@nestjs/common';
import { Observable, of } from 'rxjs';

@Injectable()
export class FeatureCommunicationService {
  private plc: S7Endpoint = new S7Endpoint({ host: '192.168.0.10', rack: 0, slot: 1, autoReconnect: 10 });
  
  constructor() {}

  public isConnected(): Observable<boolean> {
    return of(this.plc.isConnected);
  }

  public connect(): Observable<boolean> {
    return this.plc.connect().then(() => {
      return of(this.plc.isConnected);
    });
  }

  public disconnect(): Observable<boolean> {
    return this.plc.disconnect().then(() => {
      return of(this.plc.isConnected);
    });
  }

  public readData(): Observable<any> {

    let itemGroup = new S7ItemGroup(this.plc);

    var vars = {
        Lifebit: 'DB1999,X0.0',   
        DataReady: 'DB1999,X0.1',       
        DataReceived: 'DB1999,X0.2',   
        MessageType: 'DB1999,INT2.1',   
        RecipeID: 'DB1999,S4.20',   
        OrderID: 'DB1999,S26.20',   
        SetpointDiameter: 'DB1999,REAL48',   
        MeasuredDiameter: 'DB1999,REAL52'   
    };
    // @ts-ignore
    itemGroup.setTranslationCB(tag => vars[tag]); //translates a tag name to its address
    itemGroup.addItems(Object.keys(vars));

    return itemGroup.readAllItems();
  }
 
  public writeData(): Observable<any> {
    let itemGroupWrite = new S7ItemGroup(this.plc);

    var varsWrite = {
      Lifebit: 'DB1998,X0.0',   
      DataReady: 'DB1998,X0.1',       
      DataReceived: 'DB1998,X0.2',   
      MessageType: 'DB1998,INT2.1',   
      RecipeID: 'DB1998,S4.20',   
      OrderID: 'DB1998,S26.20',   
      SetpointDiameter: 'DB1998,REAL48',   
      MeasuredDiameter: 'DB1998,REAL52'   
      };
    // @ts-ignore
    itemGroupWrite.setTranslationCB(tag => varsWrite[tag]); //translates a tag name to its address
    itemGroupWrite.addItems(Object.keys(varsWrite));

    return of(itemGroupWrite.writeItems('Lifebit', true))
  }
}