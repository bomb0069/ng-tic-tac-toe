import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BoardComponent } from './game/board/board.component';
import { GridComponent } from './game/grid/grid.component';
import { ThisTurnComponent } from './game/this-turn/this-turn.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    GridComponent,
    ThisTurnComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
