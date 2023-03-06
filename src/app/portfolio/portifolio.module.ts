import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { PortifolioContainerComponent } from './components/container/portifolio.container.component';
import { PortifolioViewComponent } from './components/view/portifolio.view.component';

const routes: Routes = [
  {
    path: 'a',
    component: PortifolioContainerComponent
  }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    PortifolioContainerComponent,
    PortifolioViewComponent
  ],
  exports: [PortifolioContainerComponent]
})
export class PortifolioModule { }
