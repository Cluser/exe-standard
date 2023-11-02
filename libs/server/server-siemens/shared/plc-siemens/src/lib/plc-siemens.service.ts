import { Injectable } from '@nestjs/common';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const NodeS7 = require('@st-one-io/nodes7');

@Injectable()
export class PlcSiemensService {

    connect(): void {
        const plc = new NodeS7.S7Endpoint({ host: '192.168.0.1', rack: 0, slot: 1 });
        console.log(plc)
    }

}