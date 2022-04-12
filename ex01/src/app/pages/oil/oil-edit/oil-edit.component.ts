import { Component, OnInit,Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-oil-edit',
  templateUrl: './oil-edit.component.html',
  styleUrls: ['./oil-edit.component.less'],
  providers: [DatePipe]
})
export class OilEditComponent implements OnInit {

  @Input() title?: string;
  @Input() subtitle?: string;
  @Input() txt?: string;
  @Input() height?: string;
  @Input() _cmd?: string;

  public editformGP!: FormGroup;
  public price_date?: String|null;
  public oil_92:number =0;
  public oil_95:number =0;
  public oil_98:number =0;
  public diesel_fuel:number =0;
  public chk_priceDate:string='';
  public today:any;

  constructor(
      private nzModalRef: NzModalRef,
      private fb: FormBuilder,
      public datePipe : DatePipe
  ) {
    this.today = new Date();
  }



  ngOnInit(): void {
    this.editformGP = this.fb.group({
      price_date: [null, Validators.required],
      oil_92: [null, ],
      oil_95: [null, ],
      oil_98: [null, ],
      diesel_fuel: [null,]
    });
  }

  destroyModal(): void {
    this.nzModalRef.destroy(true);
  }


  submit() {
    // console.log('提交表单');
    // setTimeout(() => {
    //     this.nzModalRef.destroy(true);
    // }, 1000)
  }

  datechange($event:any) {
    try {
      this.chk_priceDate ='validating';
      let tmpstr:any = $event;
      this.price_date = this.datePipe.transform(tmpstr,'yyyy-MM-dd');
      this.chk_priceDate ='succes';

    } catch (error) {
      this.chk_priceDate ='error';
    }
  }
}
