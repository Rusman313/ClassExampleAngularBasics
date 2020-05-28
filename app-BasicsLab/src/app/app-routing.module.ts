import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompTwoComponent } from './comp-two/comp-two.component';
import { CompThreeComponent } from './comp-three/comp-three.component';
import { CompOneComponent } from './comp-one/comp-one.component';
import { DefaultComponent } from './default/default.component';


const routes: Routes = [
  {path: 'two', component: CompTwoComponent},
  {path: 'three', component: CompThreeComponent},
  {path: 'one', component: CompOneComponent},
  {path: 'default', component: DefaultComponent},
  {path: '', redirectTo: '/default', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
