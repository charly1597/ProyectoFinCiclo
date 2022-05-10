import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { Datos } from '../datos';
import { UsuarioService } from '../usuario.service';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';
import { VentanaActivaComponent } from '../ventana-activa/ventana-activa.component';


@Component({
  selector: 'app-ventana-modal',
  templateUrl: './ventana-modal.component.html',
  styleUrls: ['./ventana-modal.component.css'],
})
export class VentanaModalComponent implements OnInit {

  public datos : Datos = null;

  constructor(config: NgbModalConfig, private modalService: NgbModal, private usuarioService:UsuarioService) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit(): void {
    this.obtenerDatos();
  }

  verDatos(){
    console.log(this.datos);
  }

  open() {
    const modalRef = this.modalService.open(VentanaActivaComponent);
  }

   obtenerDatos():any{
     this.usuarioService.obtenerDatos().subscribe(datos => {
     this.datos = datos;
     let tokenVentana = parseInt(this.getToken());
     if(!datos && tokenVentana == 0 ){
       this.open();
       localStorage.setItem('tokenModal',JSON.stringify(1));
     }
   })
 }

 getToken(){
  return this.usuarioService.getTokenModal();
}

}


