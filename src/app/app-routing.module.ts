import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersListComponent } from './components/characters-list/characters-list.component';
import { CharactersCardComponent } from './components/characters-card/characters-card.component';

const routes: Routes = [
  {
    path: 'characters', component: CharactersListComponent
  },
  {
    path: 'charactersCard/:id', component: CharactersCardComponent
  },
  {
    path: '**', pathMatch: 'full', redirectTo: 'characters'
  }
];

export const app_routing = RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
