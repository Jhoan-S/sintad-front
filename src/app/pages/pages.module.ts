import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';

// Components
import { EntidadComponent } from './entidad/entidad.component';
import { DocumentoComponent } from './documento/documento.component';
import { ContribuyenteComponent } from './contribuyente/contribuyente.component';
import { PagesComponent } from './pages.component';
import { EntidadMantComponent } from './entidad/entidad-mant/entidad-mant.component';
import { DocumentoMantComponent } from './documento/documento-mant/documento-mant.component';
import { ContribuyenteMantComponent } from './contribuyente/contribuyente-mant/contribuyente-mant.component';



@NgModule({
  declarations: [
    EntidadComponent,
    DocumentoComponent,
    ContribuyenteComponent,
    PagesComponent,
    EntidadMantComponent,
    DocumentoMantComponent,
    ContribuyenteMantComponent,
  ],
  exports: [
    EntidadComponent,
    DocumentoComponent,
    ContribuyenteComponent,
    PagesComponent,
    EntidadMantComponent,
    DocumentoMantComponent,
    ContribuyenteMantComponent,
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,
    MatTableModule
  ]
})
export class PagesModule { }
