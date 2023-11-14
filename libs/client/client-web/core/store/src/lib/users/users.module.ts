import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { usersReducer } from './users.reducers';
import { UsersEffects } from '.';

@NgModule({
  imports: [StoreModule.forFeature('users', usersReducer), EffectsModule.forFeature([UsersEffects])]
})
export class UsersModule {}
