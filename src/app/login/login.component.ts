import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public usuario:Usuario;
  public errMsg : string ='';

  constructor( private userService : UsuarioService, private router: Router) {
    this.usuario = new Usuario();
   }


  ngOnInit(): void {
  }

  login() {
    this.userService.findByEmailYPass(this.usuario).subscribe((usuario:Usuario) => {
      if(!usuario){
        this.router.navigateByUrl('/login');
        this.errMsg = 'Error al loguear';
      }else{
        this.router.navigateByUrl('/home');
        this.userService.setToken(usuario,0);
      }
    })
  }

  isLog(){
    this.userService.isLoggedIn();
  }

}
