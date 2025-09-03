import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { ListaDeProdutosComponent } from './components/lista-de-produtos/lista-de-produtos.component';
import { MenuComponent } from './components/menu/menu.component';
import { NoticiasComponent } from './components/noticias/noticias.component';
import { RodapeComponent } from './components/rodape/rodape.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, GaleriaComponent, ListaDeProdutosComponent, MenuComponent, NoticiasComponent, RodapeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';
}
