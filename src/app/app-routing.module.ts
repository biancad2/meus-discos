import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IndexComponent} from './index/index.component';
import {DiscListComponent} from './disc-list/disc-list.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'list', component: DiscListComponent},
  {path: 'discs/:index', component: DetailsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
