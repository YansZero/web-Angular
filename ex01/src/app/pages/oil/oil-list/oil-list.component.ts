import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit,TemplateRef, ViewContainerRef,OnDestroy } from '@angular/core';
import { MyserviceService } from '../../service/myservice.service';
import { NzModalService } from 'ng-zorro-antd/modal';
import {OilEditComponent} from './../oil-edit/oil-edit.component';

type AOA = any[][];

@Component({
  selector: 'app-oil-list',
  templateUrl: './oil-list.component.html',
  styleUrls: ['./oil-list.component.less']
})
export class OilListComponent implements OnInit {

  public dataSet:any=[];
  public keyword: string='';
  public searchLoading : boolean = false;
  public page:number=0;
  public pageSize:number=10;



  constructor(
    public myserviceService : MyserviceService,
    public translate : TranslateService,
    private nzModalService: NzModalService,
    private viewContainerRef: ViewContainerRef
  ) {
    // this.translate.setDefaultLang('zhTW');
    // this.translate.use('zhTW');

  }

  ngOnInit(): void {
    // let xxx:string= this.translate.instant('oil.field.price_date');
    // console.log('xxx',xxx);
    this.ini_search();
  };

  // 开启加载
  onBeforeSearch(): void {
    this.searchLoading = true;
  }

  // 关闭加载
  onAfterSearch(): void {
    this.searchLoading = false;
  }

  ini_search() {
    // 備份作法
    // let tmpUrl = 'http://localhost:8085/base_info/oil/oilService/getOil';
    // this.onBeforeSearch();
    // this.myserviceService.callOtherGetService2(tmpUrl).subscribe(result=>{
    //   this.dataSet= result.data;
    //   this.onAfterSearch();
    // });
    this.onBeforeSearch();
    this.myserviceService.callGetService('baseinfo','oil','get').subscribe(result=>{
      this.dataSet= result.data;
      this.onAfterSearch();
    });
  }

  search() {
    if (this.keyword!=='') {

      let querryPara = {
        page : {
          pageNow : this.page,
          pageSize: this.pageSize
        },
        keyword : this.keyword
      }
      this.onBeforeSearch();
      this.myserviceService.callGetService('baseinfo','oil','get',querryPara).subscribe(result=>{
        this.dataSet=[];
        this.dataSet= result.data.records;
        this.onAfterSearch();
      });
    }
    else {
      this.ini_search();
    }
  }

  create(): void {
    const modal =this.nzModalService.create({
      // nzTitle: '新增',
      nzTitle: this.translate.instant('oil.button.add'),
      nzContent: OilEditComponent,
      nzComponentParams: { // 给modal的参数，注意modal里需要@Input此字段
          height: '400px'  //控制高度用
      },
      nzClosable:false,
      nzWidth:800,
      nzFooter: [
          {
              label: this.translate.instant('basic.cancel'),
              onClick: () => { modal.destroy(true)}
          },
          {
              label: this.translate.instant('basic.confrim'),
              type: 'primary',
              loading: false,
              onclick: () => modal.triggerOk()
              // onClick(component):void {
              //     this.loading = true; // 让提交按钮显示加载动画，防止重复提交
              //     //component.submit();
              // }
          },
      ]
    });
    modal.afterClose.subscribe((result:Boolean) => {
        console.log('simpleModal-afterClose-res: ', result);
        if(result){
            // 在此写本页面的业务，例如更新表格的数据
            // this.getData()
        }
    });


  }

}
