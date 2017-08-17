import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageComponent } from "./manage/manage.component";
import { ListComponent } from "./manage/list/list.component";
import { AddComponent } from "./manage/add/add.component";
import { StatusComponent } from "./status/status.component";
import { Game1Component } from './status/game1/game1.component';
import { Game2Component } from './status/game2/game2.component';
import { Game3Component } from './status/game3/game3.component';


const routes: Routes = [
  { path: 'manage', component: ManageComponent, children: [
      { path: 'list', component: ListComponent },
      { path: 'addplayer', component: AddComponent }
  ]},
  { path: 'status', component: StatusComponent, children: [
      { path: 'game', children: [
          { path: '1', component: Game1Component },
          { path: '2', component: Game2Component },
          { path: '3', component: Game3Component }
      ]}
]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
