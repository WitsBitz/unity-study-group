import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SignUpFormComponent } from './signup-form.component';

import { PreventUnsavedChangesGuard } from '../shared/prevent-unsaved-changes-guard.service';
import { AuthService } from './auth.service';

import { signupRouting } from './signup.routing';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        signupRouting
    ],
    declarations: [
        SignUpFormComponent,
    ],
    providers: [
        AuthService,
        PreventUnsavedChangesGuard
    ]
})

export class SignupModule{

}