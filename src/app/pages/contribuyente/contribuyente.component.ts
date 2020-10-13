import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contribuyente } from 'src/app/models/contribuyente.model';
import { MantenimientoService } from '../../services/mantenimiento.service';

@Component({
  selector: 'app-contribuyente',
  templateUrl: './contribuyente.component.html',
  styleUrls: ['./contribuyente.component.css']
})
export class ContribuyenteComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nombre', 'estado', 'action'];
  contribuyentes: Contribuyente[];

  constructor(private mantenimientoService: MantenimientoService, private router: Router) { }

  ngOnInit(): void {
    this.getContribuyentes();
  }

  getContribuyentes() {
    this.mantenimientoService.getContribuyentes().subscribe((contribuyentes: Contribuyente[]) => {
      this.contribuyentes = contribuyentes;
    });
  }

  deactivateContribuyente( cont: Contribuyente ) {
    const strId = cont.id_tipo_contribuyente.toString();
    this.mantenimientoService.deactivateContribuyente( strId ).toPromise().then( () => cont.estado = !cont.estado );
  }

  editarContribuyente( cont: Contribuyente) {
    this.router.navigate([`mantenimiento/contribuyente/${cont.id_tipo_contribuyente.toString()}/updateCont`]);
  }
}
