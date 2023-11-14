import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ModalAbstractComponent } from './modal-abstract.component';
import { UserProfileModalComponent } from './user-profile-modal/user-profile-modal.component';

@NgModule({
    declarations: [ModalAbstractComponent, UserProfileModalComponent],
    imports: [CommonModule, InputTextModule, ButtonModule],
    exports: [ModalAbstractComponent, UserProfileModalComponent]
})
export class ModalAbstractModule { }
