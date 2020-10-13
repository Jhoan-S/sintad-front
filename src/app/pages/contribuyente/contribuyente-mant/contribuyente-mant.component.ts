import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MantenimientoService } from 'src/app/services/mantenimiento.service';

@Component({
  selector: 'app-contribuyente-mant',
  templateUrl: './contribuyente-mant.component.html',
  styleUrls: []
})
export class ContribuyenteMantComponent implements OnInit {

  contribuyenteForm: FormGroup;
  contId: string;

  constructor(
    private mantenimientoService: MantenimientoService, 
    private fb: FormBuilder, 
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.params.subscribe(params => {
      console.log(params);
      if(params.contId) {
          this.contId = params.contId;
          this.getDetalle();
      }
    });
  }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.contribuyenteForm = this.fb.group({
      nombre : '',
      estado : ''
    });
  }

  getDetalle() {
    this.mantenimientoService.getContribuyenteById(this.contId).subscribe((response: any) => {
      const encuesta = response.result[0];
      this.contribuyenteForm.patchValue({
        nombre: encuesta.nombre,
        estado: encuesta.estado
      })
    });
  }



  modificarAgregarContribuyente() {

    const body = this.contribuyenteForm.value;

    if ( !this.contId ) {
      this.guardarContribuyente( body );
    } else {
      this.actualizarContribuyente( body );
    }
  }

  guardarContribuyente( body ) {
    this.mantenimientoService.createContribuyente( body ).subscribe( (result) => {
      console.log(result);
      this.router.navigate(['mantenimiento/contribuyente']);
    });
  }

  actualizarContribuyente( body ) {
    this.mantenimientoService.updateContribuyente( this.contId, body ).subscribe( (result) => {
      console.log(result);
      this.router.navigate(['mantenimiento/contribuyente']);
    });
  }

  goback() {
    this.router.navigate(['mantenimiento/contribuyente']);
  }
}
