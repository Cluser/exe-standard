import { Component, Input } from '@angular/core';
import { ModalAbstractComponent } from '../modal-abstract.component';

@Component({
    selector: 'exe-user-profile-modal',
    templateUrl: './user-profile-modal.component.html',
    styleUrls: ['./user-profile-modal.component.scss', '../modal-abstract.component.scss']
})
export class UserProfileModalComponent extends ModalAbstractComponent {
    @Input() user: { name: string; surname: string } = { name: '', surname: '' };

    saveProfile(): void {
        this.save(this.user);
    }
}
