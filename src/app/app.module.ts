import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { app_routing } from './app-routing.module';
import { CharactersListComponent } from './components/characters-list/characters-list.component';
import { PaginatePipe } from './pipes/paginate.pipe';
import { FormsModule } from '@angular/forms';
import { CharactersCardComponent } from './components/characters-card/characters-card.component';

@NgModule({
  declarations: [
    AppComponent,
    CharactersListComponent,
    PaginatePipe,
    CharactersCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    app_routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
