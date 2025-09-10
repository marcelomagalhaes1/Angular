import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  // O método onSubmit deve ficar aqui!
  onSubmit(usuario: string, senha: string): void {
    console.log("--- Dados de Login Recebidos ---");
    console.log("Usuário informado:", usuario);
    console.log("Senha informada:", senha);
    console.log("---------------------------------");
  }

}