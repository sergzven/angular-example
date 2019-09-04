import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { StoreState } from './../../models/app.model';
import { AppState } from './../../app.state';
import { Observable, timer, interval } from 'rxjs';
import * as AppActions from './../../store/actions/app.actions';

@Component({
  selector: 'app-store-state',
  templateUrl: './store-state.component.html',
  styles: []
})
export class StoreStateComponent implements OnInit {

  public variables: Observable<StoreState[]>;
  private timer;

  constructor(
      private store: Store<AppState>
  ) {
    this.variables = store.select('state');
  }

  ngOnInit() {
  }

  public start() {
    console.log('start');
    this.timer = timer(1000, 1000).subscribe(() => {
      this.store.dispatch(new AppActions.Increase());
      this.store.dispatch(new AppActions.Decrease());
      this.store.dispatch(new AppActions.Decrease());
    });
  }

  public reset() {
    console.log('reset');
    this.timer.unsubscribe();
    this.store.dispatch(new AppActions.Reset());
  }

}
