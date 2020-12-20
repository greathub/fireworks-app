import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor( private translateService: TranslateService) {}

  setLang(language: string): void {
    this.translateService.setDefaultLang(language);
  }
}
