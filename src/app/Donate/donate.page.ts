import { Component } from '@angular/core';
import { Plugins } from '@capacitor/core';
const { Clipboard } = Plugins;
@Component({
  selector: 'app-donate',
  templateUrl: 'donate.page.html',
  styleUrls: ['donate.page.scss']
})
export class DonatePage {
  public donateBTC = '1CzBUjYFnxHi3hXGH4yuyNjgKpJ6Md4WPR';

  constructor() {}

  copyBTCAddress(): void {
    Clipboard.write({ string: this.donateBTC });
  }
}
