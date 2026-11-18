import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './webSite/header/header';
import { Content } from './webSite/content/content';
import { Footer } from './webSite/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Content, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
