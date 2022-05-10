import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Datos } from '../datos';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-ventana-activa',
  templateUrl: './ventana-activa.component.html',
  styleUrls: ['./ventana-activa.component.css']
})
export class VentanaActivaComponent implements OnInit {

  public datos : Datos;
  public tokenDatos : number;

  constructor(public activeModal: NgbActiveModal, private userService : UsuarioService) {
    this.datos = new Datos();
  }

  ngOnInit(): void {
    this.obtenerToken();
  }

  enviarDatos(){
    let usuario:Usuario = JSON.parse(localStorage.getItem('usuario'));
    this.datos.id_usuario = usuario;
    this.userService.addDatos(this.datos).subscribe();
    this.activeModal.close();
  }

  obtenerToken():any{
    this.userService.obtenerTokenDatos().subscribe(data => {
      this.tokenDatos = data.token_datos;
    })
  }

  verToken(){
    console.log(this.tokenDatos);
  }

  actualizarToken(){
    this.userService.actualizarTokenDatos();
  }

}
