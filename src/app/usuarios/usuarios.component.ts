import { Component, Input, OnInit, Output } from '@angular/core';
import { Datos } from '../datos';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  public usuario : Usuario = null;
  public datos : Datos = null;

  constructor(private usuarioService:UsuarioService) { }

  ngOnInit(): void {
    this.usuarioLog();
    this.obtenerDatos();
  }

  usuarioLog():any{
    this.usuarioService.getUserLog().subscribe(user =>{
      this.usuario = user;
    })
  }

  obtenerDatos():any{
     this.usuarioService.obtenerDatos().subscribe(datos => {
      console.log(datos);
      this.datos = datos;
    })
  }


}
