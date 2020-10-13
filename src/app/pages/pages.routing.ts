import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EntidadComponent } from './entidad/entidad.component';
import { ContribuyenteComponent } from './contribuyente/contribuyente.component';
import { DocumentoComponent } from './documento/documento.component';
import { EntidadMantComponent } from './entidad/entidad-mant/entidad-mant.component';
import { DocumentoMantComponent } from './documento/documento-mant/documento-mant.component';
import { ContribuyenteMantComponent } from './contribuyente/contribuyente-mant/contribuyente-mant.component';

const routes: Routes = [
    { 
        path: 'mantenimiento',
        children: [
        // { path: '', component: EntidadComponent },
        { path: '', redirectTo: '/entidad', pathMatch: 'full' },
        { path: 'entidad', component: EntidadComponent },
        { path: 'entidad/create', component: EntidadMantComponent },
        { path: 'entidad/:entId/update', component: EntidadMantComponent },
        { path: 'contribuyente', component: ContribuyenteComponent },
        { path: 'contribuyente/createCont', component: ContribuyenteMantComponent },
        { path: 'contribuyente/:contId/updateCont', component: ContribuyenteMantComponent },
        { path: 'documento', component: DocumentoComponent },
        { path: 'documento/createDoc', component: DocumentoMantComponent },
        { path: 'documento/:docId/updateDoc', component: DocumentoMantComponent }
    ]}
];

@NgModule({
    imports: [ RouterModule.forChild( routes ) ],
    exports: [ RouterModule ]
})
export class PagesRoutingModule {}