import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-sales-edit',
  templateUrl: './sales-edit.component.html',
  styleUrls: ['./sales-edit.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SalesEditComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
