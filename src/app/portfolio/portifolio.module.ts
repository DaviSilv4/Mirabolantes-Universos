import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { PortifolioContainerComponent } from './components/container/portifolio.container.component';
import { PortifolioViewComponent } from './components/view/portifolio.view.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    PortifolioContainerComponent,
    PortifolioViewComponent
  ],
  exports: [PortifolioContainerComponent]
})
export class PortifolioModule { }
