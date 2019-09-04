import { Action } from '@ngrx/store';
import { StoreState } from './../../models/app.model';
import * as AppActions from './../actions/app.actions';

const initialState: StoreState = {
    first: -5,
    second: 10
  };

export function reducer(state: StoreState = initialState, action: AppActions.Actions) {

  let newState: StoreState;

  switch (action.type) {
    case AppActions.INCREASE:
      newState = Object.assign({}, state, {
        first: state.first + 1
      });
      return newState;
    case AppActions.DECREASE:
      newState = Object.assign({}, state, {
        second: state.second - 1
      });
      return newState;
    case AppActions.RESET:
      return initialState;
    case AppActions.CHANGE:
    default:
      return state;
  }
}
