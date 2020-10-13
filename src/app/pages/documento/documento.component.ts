import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Documento } from 'src/app/models/documento.model';
import { MantenimientoService } from 'src/app/services/mantenimiento.service';

@Component({
  selector: 'app-documento',
  templateUrl: './documento.component.html',
  styleUrls: ['./documento.component.css']
})
export class DocumentoComponent implements OnInit {

  displayedColumns: string[] = ['id', 'codigo', 'nombre', 'descripcion', 'estado', 'action'];
  documentos: Documento[];

  constructor(private mantenimientoService: MantenimientoService, private router: Router) { }

  ngOnInit(): void {
    this.getDocumentos();
  }

  getDocumentos() {
    this.mantenimientoService.getDocumentos().subscribe( (documentos: Documento[]) => {
      this.documentos = documentos;
    });
  }

  deactivateDocumento( doc: Documento ) {
    const docId = doc.id_tipo_documento.toString();
    this.mantenimientoService.deactivateDocumento( docId ).toPromise().then( () => doc.estado = !doc.estado);
  }

  editarDocumento( doc: Documento) {
    this.router.navigate([`mantenimiento/documento/${doc.id_tipo_documento.toString()}/updateDoc`]);
  }

}
