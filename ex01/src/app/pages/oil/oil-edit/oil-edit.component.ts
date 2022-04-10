import { Component, OnInit,Input } from '@angular/core';
import { NzModalRef } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-oil-edit',
  templateUrl: './oil-edit.component.html',
  styleUrls: ['./oil-edit.component.less']
})
export class OilEditComponent implements OnInit {
  @Input() title?: string;
  @Input() subtitle?: string;
  @Input() txt?: string;
  @Input() height?: string;

  constructor(private nzModalRef: NzModalRef) {}

  ngOnInit(): void {
  }

  destroyModal(): void {
    this.nzModalRef.destroy(true);
  }


  submit() {
    console.log('提交表单');
    setTimeout(() => {
        this.nzModalRef.destroy(true);
    }, 1000)
  }
}
