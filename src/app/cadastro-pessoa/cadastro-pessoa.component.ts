import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // 1. Importe o CommonModule

@Component({
  selector: 'app-cadastro-pessoa',
  standalone: true,
  imports: [
    CommonModule // 2. Adicione o CommonModule aos imports
  ],
  templateUrl: './cadastro-pessoa.component.html',
  styleUrl: './cadastro-pessoa.component.css'
})
export class CadastroPessoaComponent {

  // 3. Adicione a função onSubmit para receber os dados do HTML
  onSubmit(nome: string, dataNascimento: string, telefone: string, endereco: string): void {
    console.log("--- Dados de Cadastro Recebidos ---");
    console.log("Nome:", nome);
    console.log("Data de Nascimento:", dataNascimento);
    console.log("Telefone:", telefone);
    console.log("Endereço:", endereco);
    console.log("------------------------------------");
  }

}