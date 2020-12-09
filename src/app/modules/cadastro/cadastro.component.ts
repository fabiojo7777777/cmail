import { HttpClient, HttpResponseBase } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { map, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  
  nomeValidators = Validators.compose([Validators.required, Validators.minLength(3)]);
  usernameValidators = Validators.compose([Validators.required]);
  avatarValidators = Validators.compose([Validators.required, this.validaImagem.bind(this)]);
  senhaValidators = Validators.compose([
    Validators.required,
    Validators.pattern('([x00-xff]*[a-z]){2}'),
    Validators.pattern('([x00-xff]*[A-Z]){2}'),
    Validators.pattern('([x00-xff].*[0-9]){2}'),
    Validators.pattern('([x00-xff]*[!#$%&?	"]){2}'),
  ]);
  telefoneValidators = Validators.compose([Validators.required, Validators.pattern('[0-9]{4}-?[0-9]{4}[0-9]?')]);

  formCadastro = new FormGroup({
    nome: new FormControl('', this.nomeValidators),
    username: new FormControl('', this.usernameValidators),
    senha: new FormControl('', this.senhaValidators),
    avatar: new FormControl('', this.avatarValidators),
    telefone: new FormControl('', this.telefoneValidators)
  })

  constructor(private httpClient: HttpClient,
    private	roteador: Router) {
		console.log(roteador.url);
   }
  
  ngOnInit() { }
  handleCadastrarUsuario() {
    if (this.formCadastro.valid) {
      console.log(this.formCadastro);
    }
    else {
      this.validarTodosOsCamposDoFormulario(this.formCadastro);
      //console.log('Campos	precisam	ser	preenchidos!')
    }
  }
  validarTodosOsCamposDoFormulario(form: FormGroup) {
    Object.keys(form.controls).forEach(field => {
      const control = form.get(field);
      control.markAsTouched({ onlySelf: true });
    })
  }
  validaImagem(campoDoFormulario: FormControl) {
    return this.httpClient
      .head(campoDoFormulario.value, {
        observe: 'response'
      })
      .pipe(
        map((response: HttpResponseBase) => {
          return response.ok ? null : { urlInvalida: true }
        }),
        catchError((error) => {
          return [{ urlInvalida: true }]
        })
      )

  }
}
