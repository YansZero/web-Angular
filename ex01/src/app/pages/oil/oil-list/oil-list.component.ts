import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit,TemplateRef,OnDestroy } from '@angular/core';
import { MyserviceService } from '../../service/myservice.service';

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


  constructor(
    public myserviceService : MyserviceService,
    public translate : TranslateService
  ) {
    // this.translate.setDefaultLang('zh');
    // this.translate.use('zh');

  }

  ngOnInit(): void {
    let xxx:string= this.translate.instant('123');
    console.log('xxx',xxx);
    // this.dataSet=[
    //   {
    //     price_date : '2022-04-04',
    //     oil_92 : 31,
    //     oil_95 : 32.5,
    //     oil_98 : 34.5,
    //     diesel_fuel: 28.8
    //   },
    //   {
    //     price_date : '2022-03-28',
    //     oil_92 : 31.2,
    //     oil_95 : 32.7,
    //     oil_98 : 34.7,
    //     diesel_fuel: 29.1
    //   },
    //   {
    //     price_date : '2022-03-21',
    //     oil_92 : 31.5,
    //     oil_95 : 33,
    //     oil_98 : 35,
    //     diesel_fuel: 29.4
    //   },
    //   {
    //     price_date : '2022-03-14',
    //     oil_92 : 31.6,
    //     oil_95 : 33.1,
    //     oil_98 : 35.1,
    //     diesel_fuel: 29.4
    //   },
    //   {
    //     price_date : '2022-03-07',
    //     oil_92 : 31.3,
    //     oil_95 : 32.8,
    //     oil_98 : 34.8,
    //     diesel_fuel: 29.1
    //   }
    // ];
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
    let tmpUrl = 'http://localhost:8085/base_info/oil/oilService/getOil';
    this.onBeforeSearch();
    this.myserviceService.callOtherGetService2(tmpUrl).subscribe(result=>{
      this.dataSet= result.data;
      this.onAfterSearch();
    });
  }

  search() {

  }

}
