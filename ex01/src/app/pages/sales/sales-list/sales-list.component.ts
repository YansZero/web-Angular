import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-sales-list',
  templateUrl: './sales-list.component.html',
  styleUrls: ['./sales-list.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SalesListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
