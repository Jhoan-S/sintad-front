import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MantenimientoService } from 'src/app/services/mantenimiento.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-entidad-mant',
  templateUrl: './entidad-mant.component.html',
  styleUrls: ['./entidad-mant.component.css']
})
export class EntidadMantComponent implements OnInit {

  entidadForm: FormGroup;
  selectedDoc: any;
  selectedCont: any;
  contribuyentes: any[];
  documentos: any[];
  entId:string;
  actualizar: boolean;

  constructor(
    private mantenimientoService: MantenimientoService, 
    private fb: FormBuilder, 
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.params.subscribe(params => {
      console.log(params);
      if(params.entId) {
          this.entId = params.entId;
          this.getDetalle();
      }
    });
  }

  ngOnInit(): void {
    this.initializeForm();
    this.getContribuyentes();
    this.getDocumentos();
  }

  initializeForm(): void {
    this.entidadForm = this.fb.group({
      id_tipo_documento : '',
      nro_documento: '',
      razon_social: '',
      nombre_comercial: '',
      id_tipo_contribuyente: '',
      direccion: '',
      telefono: '',
      estado: ''
    });
  }

  getContribuyentes() {
    this.mantenimientoService.getContribuyentes().subscribe((contribuyentes) => {
      this.contribuyentes = contribuyentes;
    });
  }

  getDocumentos() {
    this.mantenimientoService.getDocumentos().subscribe((documentos) => {
      this.documentos = documentos;
    });
  }

  getDetalle() {
    this.mantenimientoService.getEntidadById(this.entId).subscribe((response: any) => {
      const encuesta = response.result;
      console.log(encuesta);
      this.entidadForm.patchValue({
        id_tipo_documento : encuesta.id_tipo_documento,
        nro_documento: encuesta.nro_documento,
        razon_social: encuesta.razon_social,
        nombre_comercial: encuesta.nombre_comercial,
        id_tipo_contribuyente: encuesta.id_tipo_contribuyente,
        direccion: encuesta.direccion,
        telefono: encuesta.telefono,
        estado: encuesta.estado
      })
    });
  }

  modificarAgregarEntidad() {
    const body = this.entidadForm.value;

    if (!this.entId) {
      this.guardarEntidad( body );
    } else {
      this.actualizarEntidad( body );
    }
  }

  guardarEntidad( body ) {
      this.mantenimientoService.createEntidad( body ).subscribe((result) => {
        this.router.navigate(['entidad']);
      });
  }

  actualizarEntidad( body ) {
    this.mantenimientoService.updateEntidad( this.entId, body ).subscribe( (result) => {
      this.router.navigate(['entidad']);
    });
  }

  goback() {
    this.router.navigate(['mantenimiento/entidad']);
  }

}
