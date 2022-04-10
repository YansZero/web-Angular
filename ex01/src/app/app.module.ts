import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { zh_TW } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { FormsModule } from '@angular/forms';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
// import { TranslateService,TranslateModule,TranslateLoader} from '@ngx-translate/core';
// import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { TranslateModule, TranslateLoader, TranslateCompiler } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateMessageFormatCompiler } from 'ngx-translate-messageformat-compiler';


//registerLocaleData(zh_TW);
// export function HttpLoaderFactory(http: HttpClient) {
//   return new TranslateHttpLoader(http);
// }
// export function createTranslateLoader(http: HttpClient) {
//   return new TranslateHttpLoader(http, './../assets/i18n/', '.json');
// }

// AoT requires an exported function for factories
// 建立TranslateHttpLoader作為語系檔的讀取器
// 這主要是告訴 ngx-translate 翻譯檔該怎麼載入，用 TranslateHttpLoader 是表示以 HTTP 方式去下載、載入
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

// 設定
const translateConfig = {
  defaultLanguage: 'zh_TW',  // 預設是英文
  loader: {
    provide: TranslateLoader,
    useFactory: HttpLoaderFactory,  // 前面寫的 Factory
    deps: [HttpClient]
  },
  compiler: {
    provide: TranslateCompiler,
    useClass: TranslateMessageFormatCompiler
  }
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot(translateConfig),  // 模組帶設定
    // TranslateModule.forRoot({
    //   loader: {
    //       provide: TranslateLoader,
    //       useFactory: (createTranslateLoader),
    //       deps: [HttpClient]
    //     },
    //   defaultLanguage: 'zh_TW',
    // }),
    // TranslateModule.forRoot({
    //   loader: {
    //       provide: TranslateLoader,
    //       useFactory: HttpLoaderFactory,
    //       deps: [HttpClient]
    //   }
    //}),
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_TW }],
  bootstrap: [AppComponent]
})
export class AppModule { }
