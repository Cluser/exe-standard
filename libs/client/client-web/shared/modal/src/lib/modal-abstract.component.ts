import { Component } from '@angular/core';
import { DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
    selector: 'exe-modal-abstract',
    template: './modal-abstract.component.html',
    styleUrls: ['./modal-abstract.component.scss']
})
export class ModalAbstractComponent {

    constructor(public ref: DynamicDialogRef) {}

    save(value: any) {
        this.ref.close(value);
    }

    close() {
        this.ref.close();
    }
}
