import { ApuestasComponent } from './components/pages/apuestas/apuestas.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/apuestas', pathMatch: 'full' },
  { path: 'apuestas', component: ApuestasComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
