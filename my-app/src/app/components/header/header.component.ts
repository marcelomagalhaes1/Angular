import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'] 
})
export class HeaderComponent {
submitSearch() {
throw new Error('Method not implemented.');
}
  title: string = 'MeuSite';

  // Função que retorna um valor dinâmico
  getUserStatus(): string {
    const loggedIn = false; // pode ser uma lógica real de login
    return loggedIn ? 'Bem-vindo, Usuário!' : 'Faça login';
  }

  // Função que retorna a cor do botão dinamicamente
  getButtonColor(): string {
    const loggedIn = false;
    return loggedIn ? '#28a745' : '#ffcc00';
  }
}
