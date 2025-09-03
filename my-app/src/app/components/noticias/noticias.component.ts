import { Component } from '@angular/core';

@Component({
  selector: 'app-noticias',
  standalone: true,
  imports: [],
  templateUrl: './noticias.component.html',
  styleUrl: './noticias.component.css'
})
export class NoticiasComponent {
  title: string = 'Últimas Notícias';
  noticias = [
    { titulo: 'Notícia 1', resumo: 'Resumo da notícia 1', link: '#' },
    { titulo: 'Notícia 2', resumo: 'Resumo da notícia 2', link: '#' },
    { titulo: 'Notícia 3', resumo: 'Resumo da notícia 3', link: '#' }
  ];
}
