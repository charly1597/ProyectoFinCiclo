import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  public usuario : Usuario;

  constructor(private userService : UsuarioService, private router: Router) {
    this.usuario = new Usuario();

   }

  ngOnInit(): void {
  }

  registro(){
    let usuario = this.usuario;
    if(this.userService.addUsuario(usuario).subscribe()){
      this.router.navigateByUrl('/login');
    }else{
      this.router.navigateByUrl('/register');
    }
  }

}
