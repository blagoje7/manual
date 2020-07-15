import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule} from '@angular/common/http';
import { MatNativeDateModule } from '@angular/material/core';


import { AppComponent } from './app.component';
import { FilmoviComponent } from './filmovi/filmovi.component';
import { ProjekcijeComponent } from './projekcije/projekcije.component';
import { KarteComponent } from './karte/karte.component';
import { AddFilmComponent } from './filmovi/add-film/add-film.component';
import { DetailsFilmComponent } from './filmovi/details-film/details-film.component';
import { UpdateFilmComponent } from './filmovi/update-film/update-film.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AddProjekcijaComponent } from './projekcije/add-projekcija/add-projekcija.component';
import { UpdateProjekcijaComponent } from './projekcije/update-projekcija/update-projekcija.component';
import { AddKartaComponent } from './karte/add-karta/add-karta.component';
import { UpdateKartaComponent } from './karte/update-karta/update-karta.component';

@NgModule({
  declarations: [
    AppComponent,
    FilmoviComponent,
    ProjekcijeComponent,
    KarteComponent,
    AddFilmComponent,
    DetailsFilmComponent,
    UpdateFilmComponent,
    NotFoundComponent,
    WelcomeComponent,
    AddProjekcijaComponent,
    UpdateProjekcijaComponent,
    AddKartaComponent,
    UpdateKartaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
