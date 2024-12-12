import { Component, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Navbar } from '../../components/navbar/navbar.component';

@Component ({
  selector: 'dc-home',
  imports: [
    RouterLink,
    Navbar
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class Home {

}

