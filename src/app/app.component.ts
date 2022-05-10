import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { UsuarioService } from './usuario.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'gestionUsuarios-Aymo';

  constructor(private userService: UsuarioService, private router: Router){
  }


  isLog() : boolean {
    return this.userService.isLoggedIn();
  }

  logout(): void{
    this.userService.logout();
    this.router.navigateByUrl('/login');
  }

}
