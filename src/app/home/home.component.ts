import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  durationInSeconds = 5;

  constructor(private userService : UsuarioService, private router: Router, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    if(!this.isLog()){
      this.openSnackBar();
      this.router.navigateByUrl('/login');
    }
    console.log(this.getToken());
  }

  openSnackBar() {
    this._snackBar.open('Debes iniciar sesion', 'Cerrar', {
      duration:3000,
      verticalPosition: 'top',
      panelClass: ['blue-snackbar']
    });
  }


  getToken(){
    return this.userService.getTokenModal();
  }

  isLog():boolean {
    return this.userService.isLoggedIn();
  }

}
