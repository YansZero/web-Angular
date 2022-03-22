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
    // console.log('xConfig',this.xConfig);
  }

  // get 自己主機方法
  public callGetService(xServiceName:string,getInfo:object): Observable<any> {
    return this.http.get(this.xConfig.Apiurl,{ params: { getInfo: JSON.stringify(getInfo) } });
  }

  // post 自己主機方法
  public callPostService(xServiceName:string,xfunction: string,data:object): Observable<any> {
    let url:string = this.xConfig.Apiurl;
    if (url.charAt(url.length-1)!=='/') {
      url += '/';
    }
    url += xServiceName + '/' + xfunction;
    return this.http.post(url,data);
  }

    // get 自己主機方法
    public callOtherGetService(xUrl:string,getInfo:object): Observable<any> {
      return this.http.get(xUrl,{ params: { getInfo: JSON.stringify(getInfo)}});
    }

    // post 自己主機方法
    public callOtherPostService(xUrl:string,xServiceName:string,xfunction: string,data:object): Observable<any> {
      let url:string = xUrl;
      if (url.charAt(url.length-1)!=='/') {
        url += '/';
      }
      url += xServiceName + '/' + xfunction;
      return this.http.post(url,data);
    }

}
