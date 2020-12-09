import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { SharedComponentModule } from 'src/app/components/shared-component.module';
import { LoginRoutingModule } from './login-routing.module';
@NgModule({
    declarations: [LoginComponent],
    imports: [
        CommonModule,
        SharedComponentModule,
        LoginRoutingModule
    ]
})
export class LoginModule { }