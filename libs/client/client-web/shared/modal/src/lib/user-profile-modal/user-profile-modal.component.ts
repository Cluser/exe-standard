import { Component, Input, OnInit } from '@angular/core';
import { ModalAbstractComponent } from '../modal-abstract.component';

@Component({
    selector: 'exe-user-profile-modal',
    templateUrl: './user-profile-modal.component.html',
    styleUrls: ['./user-profile-modal.component.scss', '../modal-abstract.component.scss']
})
export class UserProfileModalComponent extends ModalAbstractComponent implements OnInit {
    @Input() user: { name: string; surname: string } = { name: '', surname: '' };

    ngOnInit(): void {}

    saveProfile(): void {
        this.save(this.user);
    }
}
