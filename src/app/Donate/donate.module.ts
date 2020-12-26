import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DonatePage } from './donate.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { DonatePageRoutingModule } from './donate-routing.module';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{path: '', component: DonatePage}]),
    DonatePageRoutingModule,
    TranslateModule,
  ],
  declarations: [DonatePage]
})
export class DonatePageModule {}
