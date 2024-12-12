import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Init } from 'v8';


@Component({
  selector: 'dc-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class Home implements Init {
  // public showNav = signal<boolean>(true);



}

