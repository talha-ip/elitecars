import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

 import { ExpandableComponentComponent } from '../expandable-component/expandable-component.component';
 import { ItemExpandComponentComponent } from '../item-expand-component/item-expand-component.component';
@NgModule({
  declarations: [
    ExpandableComponentComponent,
    ItemExpandComponentComponent
  ],
  entryComponents: [],
  exports:[
    ExpandableComponentComponent,
    ItemExpandComponentComponent
  ],
  imports: [
      IonicModule,
      CommonModule,
      FormsModule,
  ],
})
export class ShareModule { }
