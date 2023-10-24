import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileModalComponent } from './user-profile-modal.component';

@NgModule({
    declarations: [UserProfileModalComponent],
    imports: [CommonModule, FormsModule, ReactiveFormsModule],
    exports: [UserProfileModalComponent]
})
export class UserProfileModalModule { }
