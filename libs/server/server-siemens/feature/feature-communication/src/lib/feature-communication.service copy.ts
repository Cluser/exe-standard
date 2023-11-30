// @ts-ignore: Unreachable code error
import { S7Endpoint, S7ItemGroup } from '@st-one-io/nodes7';
import { Injectable } from '@nestjs/common';

@Injectable()
export class FeatureCommunicationService {
  private plc: S7Endpoint;
  private readVariables: S7ItemGroup;
  private writeVariables: S7ItemGroup;
  
  constructor() {
    this.plc = this.createPlcEndpoint();
    this.setupPlcEventHandlers();
    this.readVariables = this.createItemGroup({
      Lifebit: 'DB1999,X0.0',
      DataReady: 'DB1999,X0.1',
      DataReceived: 'DB1999,X0.2',
      MessageType: 'DB1999,INT2.1',
      RecipeID: 'DB1999,S4.20',
      OrderID: 'DB1999,S26.20',
      SetpointDiameter: 'DB1999,REAL48',
      MeasuredDiameter: 'DB1999,REAL52',
    });
    this.writeVariables = this.createItemGroup({
      Lifebit: 'DB1998,X0.0',
      DataReady: 'DB1998,X0.1',
      DataReceived: 'DB1998,X0.2',
      MessageType: 'DB1998,INT2.1',
      RecipeID: 'DB1998,S4.20',
      OrderID: 'DB1998,S26.20',
      SetpointDiameter: 'DB1998,REAL48',
      MeasuredDiameter: 'DB1998,REAL52',
    });
    this.connectToPlc();

    this.startReadingPlcVariables();
  }

  private createPlcEndpoint(): S7Endpoint {
    return new S7Endpoint({ host: '192.168.0.10', rack: 0, slot: 1, autoreconnect: 10 });
  }

  private setupPlcEventHandlers(): void {
    // @ts-ignore
    this.plc.on('error', e => console.log('PLC Error!', e));
    this.plc.on('disconnect', () => console.log('PLC Disconnect'));
    this.plc.on('message', () => console.log('message'));
  }

  private createItemGroup(vars: { [key: string]: string }): S7ItemGroup {
    const itemGroup = new S7ItemGroup(this.plc);
    // @ts-ignore
    itemGroup.setTranslationCB(tag => vars[tag]);
    itemGroup.addItems(Object.keys(vars));
    return itemGroup;
  }

  public async connectToPlc(): Promise<void> {
    return new Promise((resolve) => {
      this.plc.once('connect', async () => {
        console.log('connected!');
        resolve();
      });
    });
  }

  public async disconnectPlc(): Promise<void> {
    return new Promise((resolve) => {
      this.plc.once('disconnect', async () => {
        console.log('disconnected!');
        resolve();
      });
    });
  }

  private async readPlcVariables(): Promise<any> {
    return await this.readVariables.readAllItems();
  }

  private writePlcVariable(variableName: string, value: any): void {
    this.writeVariables.writeItems(variableName, value);
  }

  public async startReadingPlcVariables(): Promise<void> {
    setInterval(async () => {
      const variables = await this.readPlcVariables();
      console.log(variables);
      this.writePlcVariable('Lifebit', !variables.Lifebit);
    }, 1000);
  }

  
}