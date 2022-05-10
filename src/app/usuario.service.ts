import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from './usuario';
import { Router } from '@angular/router';
import { Datos } from './datos';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  API = 'http://localhost/ApiGestionUsuarios';

  constructor(private clienteHttp : HttpClient, private router: Router) { }

  findByEmailYPass(usuario : Usuario): Observable<any> {
    return this.clienteHttp.post(`${this.API}/buscarPorCorreoyPass.php`, usuario);
  }

  setToken(token:any, tokenModal:any){
    localStorage.setItem('usuario', JSON.stringify(token));
    localStorage.setItem('tokenModal', JSON.stringify(tokenModal));
  }

  getToken(){
    return localStorage.getItem('usuario');
  }

  getTokenModal(){
    return localStorage.getItem('tokenModal');
  }

  getUserLog():Observable<any>{
    let user = JSON.parse(localStorage.getItem('usuario'));
    return this.clienteHttp.get(`${this.API}/obtenerUsuarioLog.php?id=${user.id}`);
  }

  isLoggedIn(): boolean {
    const usuario = JSON.parse(localStorage.getItem('usuario'));
    if(usuario !=null){
      return true;
    }else{
      return false;
    }
  }

  addUsuario(usuario : Usuario): Observable<any>{
    console.log(usuario);
    return this.clienteHttp.post(`${this.API}/registro.php`, usuario);

  }

  addDatos(datos : Datos):Observable<any>{
    return this.clienteHttp.post(`${this.API}/addDatos.php`, datos);
  }

  logout(): void{
    localStorage.removeItem('usuario');
    localStorage.removeItem('tokenModal');
  }

  obtenerDatos(): Observable<any>{
    let user = JSON.parse(localStorage.getItem('usuario'));
    return this.clienteHttp.get(`${this.API}/obtenerDatosUsuario.php?id=${user.id}`);
  }

  obtenerTokenDatos(): Observable<any>{
    let user = JSON.parse(localStorage.getItem('usuario'));
    return this.clienteHttp.get(`${this.API}/obtenerTokenDatos.php?id=${user.id}`);
  }

  actualizarTokenDatos(){
    let user = JSON.parse(localStorage.getItem('usuario'));
    this.clienteHttp.put(`${this.API}/updateTokenDatos.php`,user);
  }
}
