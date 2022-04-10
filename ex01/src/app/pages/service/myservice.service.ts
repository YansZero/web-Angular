import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { observable, Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

const configValue = require('../../../assets/systemconfig/config.json')


@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  public xConfig;
  constructor(private http: HttpClient) {
    this.xConfig = configValue; //取得相關參數
    //console.log('keys',Object.keys(this.xConfig));
  }

  private getMyUrl(xModule:string,xKind:string,xRest_type:string): string {
    const baseurl = this.xConfig.Apiurl +'/';
    let module_url : string='';
    let service_url: string='';
    let fun_url: string='';
    let url:string = '';

    //取得模組
    if ( (this.xConfig.module_type[xModule]=== undefined) || (this.xConfig.module_type[xModule]===null)
      || (this.xConfig.module_type[xModule]==='')
    ) {
      module_url ='';
    }
    else {
      module_url = this.xConfig.module_type[xModule] +'/';
    }

    //取得服務名稱 EX: oil/oilService

    if ( (this.xConfig.kind[xKind]=== undefined) || (this.xConfig.kind[xKind]===null)
      || (this.xConfig.kind[xKind]==='')
      || (this.xConfig[xKind].service=== undefined) || (this.xConfig[xKind].service===null)
      || (this.xConfig[xKind].service==='')
    ) {
      service_url ='';
    }
    else {
      service_url = this.xConfig.kind[xKind] + '/' + this.xConfig[xKind].service + '/';
    }

    //取得方法 post get put del ...
    if ((this.xConfig[xKind][xRest_type]=== undefined)
      || (this.xConfig[xKind][xRest_type]===null) || (this.xConfig[xKind][xRest_type]==='')) {
      fun_url ='';
    }
    else {
      fun_url = this.xConfig[xKind][xRest_type];
    };

    if ((module_url !=='') && (service_url !=='') && (fun_url !=='')) {
      url = baseurl  + module_url + service_url + fun_url;
    }
    else {
      url = '';
    };
    return url;
  }

  // get 自己主機方法
  // public callGetService_b(xServiceName:string,getInfo:object): Observable<any> {
  //   return this.http.get(this.xConfig.Apiurl,{ params: { getInfo: JSON.stringify(getInfo) } });
  // }

  // post 自己主機方法
  // public callPostService_b(xServiceName:string,xfunction: string,data:object): Observable<any> {
  //   let url:string = this.xConfig.Apiurl;
  //   if (url.charAt(url.length-1)!=='/') {
  //     url += '/';
  //   }
  //   url += xServiceName + '/' + xfunction;
  //   return this.http.post(url,data);
  // }

  public callGetService(xModule:string,xKind:string,xRest_type:string,getInfo?:object): Observable<any> {

    const url:string = this.getMyUrl(xModule,xKind,xRest_type);
    if (url !=='') {
      if ((getInfo===undefined) || (getInfo===null) ) {
        return this.http.get(url);
      }
      else {
        // let tmpObj = getInfo;
        return this.http.get(url+'/'+ JSON.stringify(getInfo));
      }
    }
    else {
      return new Observable();
    }
  }

  // post 自己主機方法
  public callPostService(xModule:string,xKind:string,xRest_type:string,data:object): Observable<any> {
    const url:string = this.getMyUrl(xModule,xKind,xRest_type);
    return this.http.post(url,data);
  }

  // put 自己主機方法
  public callPutService(xModule:string,xKind:string,xRest_type:string,data:object): Observable<any> {
    const url:string = this.getMyUrl(xModule,xKind,xRest_type);
    return this.http.put(url,data);
  }

  // delete 自己主機方法
  public callDeleteService(xModule:string,xKind:string,xRest_type:string,data:object): Observable<any> {
    const url:string = this.getMyUrl(xModule,xKind,xRest_type);
    return this.http.delete(url,data);
  }


  // get 後端主機方法
  public callOtherGetService(xUrl:string,getInfo:object): Observable<any> {
    return this.http.get(xUrl,{ params: { getInfo: JSON.stringify(getInfo)}});
  }

  // get 後端主機方法 無參數
  public callOtherGetService2(xUrl:string): Observable<any> {
    return this.http.get(xUrl);
  }

  // post 後端主機方法
  public callOtherPostService(xUrl:string,xServiceName:string,xfunction: string,data:object): Observable<any> {
    let url:string = xUrl;
    if (url.charAt(url.length-1)!=='/') {
      url += '/';
    }
    url += xServiceName + '/' + xfunction;
    return this.http.post(url,data);
  }

}
