import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { reducer } from './store/reducers/app.reducer';

import { AppComponent } from './app.component';
import { StoreStateComponent } from './components/store-state/store-state.component';
import { ValueDisplayComponent } from './components/value-display/value-display.component';

@NgModule({
  declarations: [
    AppComponent,
    StoreStateComponent,
    ValueDisplayComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      state: reducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
