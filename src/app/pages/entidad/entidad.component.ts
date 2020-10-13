import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Entidad } from 'src/app/models/entidad.models';
import { MantenimientoService } from 'src/app/services/mantenimiento.service';

@Component({
  selector: 'app-entidad',
  templateUrl: './entidad.component.html',
  styleUrls: [ './entidad.component.css' ]
})
export class EntidadComponent implements OnInit {

  displayedColumns: string[] = ['id', 'tipoDoc', 'nroDocumento', 'nombreComercial', 'tipoContribuyente', 'direccion', 'telefono','razonSocial', 'estado', 'action'];
  entidades: Entidad[];

  constructor(private mantenimientoService: MantenimientoService,private router:Router) { }

  ngOnInit(): void {
    this.getEntidades();
  }

  getEntidades() {
    this.mantenimientoService.getEntidades().subscribe( ( entidades: Entidad[] ) => {
      this.entidades = entidades;
    });
  }

  editarEntidad( ent:Entidad ) {
    // console.log(ent);
    this.router.navigate([`mantenimiento/entidad/${ent.id_entidad}/update`]);
  }

  deactivateEntidad( ent: Entidad) {
    const entId = ent.id_entidad.toString();
    this.mantenimientoService.deactivateEntidad( entId ).toPromise().then( () => ent.estado = !ent.estado);
  }

}
