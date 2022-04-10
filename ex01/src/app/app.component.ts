import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import { marker as _ } from '@biesbjerg/ngx-translate-extract-marker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  isCollapsed = false;
  l10n__title = '';

  constructor(public translate: TranslateService) {
  }

  ngOnInit(): void {
    const self = this;

    // 讓 ngx-translate-extract 可以抓到字串用的
    // _('basic.apple');

    // // 取得字串都要使用 translate.get() 來預先取得
    // this.translate.get('basic.apple').subscribe((res: string) => {
    //   self.l10n__title = res;
    // });
  }
}
