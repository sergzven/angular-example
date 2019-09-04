import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { StoreState } from './../../models/app.model';

export const CHANGE         = '[StoreState] Change';
export const INCREASE       = '[StoreState] Increase';
export const DECREASE       = '[StoreState] Decrease';
export const RESET          = '[StoreState] Reset';

export class Change implements Action {
  readonly type = CHANGE;
}

export class Increase implements Action {
  readonly type = INCREASE;
}

export class Decrease implements Action {
  readonly type = DECREASE;
}

export class Reset implements Action {
  readonly type = RESET;
}

export type Actions = Increase | Decrease | Change | Reset;
