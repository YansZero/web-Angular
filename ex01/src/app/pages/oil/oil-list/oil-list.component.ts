import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-oil-list',
  templateUrl: './oil-list.component.html',
  styleUrls: ['./oil-list.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OilListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
