import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from '../material/material.module';
import { HeroesRoutingModule } from './heroes-routing.module';

import { AddComponent } from './pages/add/add.component';
import { SearchComponent } from './pages/search/search.component';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { HomeComponent } from './pages/home/home.component';
import { ListComponent } from './pages/list/list.component';
import { CardHeroeComponent } from './components/card-heroe/card-heroe.component';
import { ImagePipe } from './pipes/image.pipe';
import { OrderPipe } from './pipes/order.pipe';

@NgModule({
  declarations: [

    AddComponent,
    SearchComponent,
    HeroeComponent,
    HomeComponent,
    ListComponent,
    CardHeroeComponent,

    ImagePipe,
    OrderPipe
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    HeroesRoutingModule,
  ]
})
export class HeroesModule { }
