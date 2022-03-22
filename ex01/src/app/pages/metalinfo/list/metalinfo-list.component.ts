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


  constructor(myserviceService : MyserviceService) {


  }

  ngOnInit(): void {
    this.dataSet=[
      { key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park'
      },
      {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park'
      },
      {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park'
      }
    ];
  };

  abc() {
    this.dataSet=[];
  }


  // this.dataSet=[
  //   { key: '1',
  //     name: 'John Brown',
  //     age: 32,
  //     address: 'New York No. 1 Lake Park'
  //   },
  //   {
  //     key: '2',
  //     name: 'Jim Green',
  //     age: 42,
  //     address: 'London No. 1 Lake Park'
  //   },
  //   {
  //     key: '3',
  //     name: 'Joe Black',
  //     age: 32,
  //     address: 'Sidney No. 1 Lake Park'
  //   }
  // ];

}
