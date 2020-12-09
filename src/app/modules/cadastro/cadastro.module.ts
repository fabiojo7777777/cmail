import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CadastroComponent } from './cadastro.component';
import { SharedComponentModule } from 'src/app/components/shared-component.module';
import { CadastroRoutingModule } from './cadastro-routing.module';
@NgModule({
    declarations: [
        CadastroComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        SharedComponentModule,
        CadastroRoutingModule
    ],
})
export class CadastroModule { }
