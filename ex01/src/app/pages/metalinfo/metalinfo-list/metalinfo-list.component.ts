import { Component, OnInit,TemplateRef,OnDestroy } from '@angular/core';
import { MyserviceService } from '../../service/myservice.service';

type AOA = any[][];

@Component({
  selector: 'app-metalinfo-list',
  templateUrl: './metalinfo-list.component.html',
  styleUrls: ['./metalinfo-list.component.less']
})

export class MetalinfoListComponent implements OnInit {

  public dataSet:any=[];
  public keyword: string='';


  constructor(myserviceService : MyserviceService) {


  }

  ngOnInit(): void {
    this.dataSet=[
      {
        m_id : 'Al',
        m_name: '鋁',
        price_date: '2022-04-06',
        exchange_no: 'LME',
        price: 3414.00
      },
      {
        m_id : 'Cu',
        m_name: '銅',
        price_date: '2022-04-06',
        exchange_no: 'LME',
        price: 10425.00
      },
      {
        m_id : 'Zn',
        m_name: '鋅',
        price_date: '2022-04-06',
        exchange_no: 'LME',
        price: 4309.00
      }
    ];
  };

  search() {

  }

  create() {

  }
}
