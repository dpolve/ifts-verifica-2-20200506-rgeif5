import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TabellaRegioniComponent } from './tabella-regioni/tabella-regioni.component';
import { TabellaProvinceComponent } from './tabella-province/tabella-province.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, TabellaRegioniComponent, TabellaProvinceComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
