import { Component } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { CadastroPessoaComponent } from "./cadastro/cadastro.component"; // Importe o componente de login

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    LoginComponent // Use o LoginComponent aqui (pode remover o RouterOutlet)
    ,
    CadastroPessoaComponent
],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Remova o método onSubmit daqui
  title = 'my-formulario';
}