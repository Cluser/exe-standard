import { Injectable } from '@nestjs/common';

const NodeS7 = require('@st-one-io/nodes7');

@Injectable()
export class PlcSiemensService {

    connect(): void {
        const plc = new NodeS7.S7Endpoint({ host: '192.168.0.1', rack: 0, slot: 1 });
        console.log(plc)
    }

}