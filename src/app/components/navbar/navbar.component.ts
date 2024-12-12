import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Logo } from "../logo/logo.component";
@Component({
  selector: 'dc-navbar',
  standalone: true,
  imports: [RouterLink, Logo],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class Navbar {

}
