import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root'
})
export class MantenimientoService {

  constructor( private webReqService: WebRequestService ) { }

  // Contribuyente

  getContribuyentes() {
    return this.webReqService.get('mantenimiento/contribuyente').pipe(map( contribuyentes => contribuyentes['result'] ));
  }

  getContribuyenteById( contId: string ) {
    return this.webReqService.get(`mantenimiento/contribuyente/${ contId }`);
  }

  createContribuyente( body: Object ) {
    return this.webReqService.post('mantenimiento/contribuyente', body);
  }

  updateContribuyente( contId: string, body: Object ) {
    return this.webReqService.put(`mantenimiento/contribuyente/${ contId }`, body);
  }

  deactivateContribuyente( contId: string ) {
    return this.webReqService.put(`mantenimiento/contribuyente/remove/${ contId }`);
  }

  // Documento

  getDocumentos() {
    return this.webReqService.get('mantenimiento/documento').pipe(map( (documentos: any) => documentos['result'] ));
  }

  getDocumentoById( docId: string ) {
    return this.webReqService.get(`mantenimiento/documento/${ docId }`);
  }

  createDocumento( body: Object ) {
    return this.webReqService.post('mantenimiento/documento', body);
  }

  updateDocumento( docId: string, body: Object ) {
    return this.webReqService.put(`mantenimiento/documento/${ docId }`, body);
  }

  deactivateDocumento( docId: string ){
    return this.webReqService.put(`mantenimiento/documento/remove/${ docId }`);
  }

  // Entidad

  getEntidades() {
    return this.webReqService.get('mantenimiento/entidad').pipe(map( (entidades: any) => entidades['result'] ));
  }

  getEntidadById( entId: string ) {
    return this.webReqService.get(`mantenimiento/entidad/${ entId }`);
  }

  createEntidad( body: Object ) {
    return this.webReqService.post('mantenimiento/entidad', body);
  }

  updateEntidad( entId: string, body: Object ) {
    return this.webReqService.put(`mantenimiento/entidad/${ entId }`, body);
  }

  deactivateEntidad( entId: string ) {
    return this.webReqService.put(`mantenimiento/entidad/remove/${ entId }`);
  }

}
