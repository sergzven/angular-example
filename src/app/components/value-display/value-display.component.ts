import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-value-display',
  templateUrl: './value-display.component.html',
  styles: [`
      .btn{
        border-width: 2px;
      }
  `]
})
export class ValueDisplayComponent implements OnInit {

  @Input() value = 0;

  constructor() { }

  ngOnInit() {
  }

}
