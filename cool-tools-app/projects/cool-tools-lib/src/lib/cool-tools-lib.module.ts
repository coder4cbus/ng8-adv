import { NgModule } from '@angular/core';
import { CoolToolsLibComponent } from './cool-tools-lib.component';
import { ModalComponent } from './modal/modal.component';
import { CommonModule } from '@angular/common';
import { ProgressComponent } from './progress/progress.component';


@NgModule({
  declarations: [CoolToolsLibComponent, ModalComponent, ProgressComponent],
  imports: [
    CommonModule
  ],
  exports: [CoolToolsLibComponent, ModalComponent, ProgressComponent]
})
export class CoolToolsLibModule { }
