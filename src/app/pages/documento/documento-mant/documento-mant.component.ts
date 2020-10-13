import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MantenimientoService } from '../../../services/mantenimiento.service';

@Component({
  selector: 'app-documento-mant',
  templateUrl: './documento-mant.component.html',
  styleUrls: []
})
export class DocumentoMantComponent implements OnInit {

  documentoForm: FormGroup;
  docId: string;

  constructor(
    private mantenimientoService: MantenimientoService, 
    private fb: FormBuilder, 
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.params.subscribe(params => {
      console.log(params);
      if(params.docId) {
          this.docId = params.docId;
          this.getDetalle();
      }
    });
  }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.documentoForm = this.fb.group({
      codigo : '',
      nombre: '',
      descripcion: '',
      estado: ''
    });
  }

  getDetalle() {
    this.mantenimientoService.getDocumentoById(this.docId).subscribe((response: any) => {
      const encuesta = response.result;
      this.documentoForm.patchValue({
        codigo : encuesta.codigo,
        nombre: encuesta.nombre,
        descripcion: encuesta.descripcion,
        estado: encuesta.estado
      })
    });
  }

  modificarAgregarDocumento() {
    const body = this.documentoForm.value;

    if (!this.docId) {
      this.guardarDocumento( body );
    } else {
      this.actualizarDocumento( body );
    }
  }

  guardarDocumento( body ) {
    this.mantenimientoService.createDocumento( body ).subscribe( (result) => {
      console.log(result);
      this.router.navigate(['mantenimiento/documento']);
    });
  }

  actualizarDocumento( body ) {
    this.mantenimientoService.updateDocumento( this.docId, body ).subscribe( (result) => {
      console.log(result);
      this.router.navigate(['mantenimiento/documento']);
    });
  }

  goback() {
    this.router.navigate(['mantenimiento/documento']);
  }
}
