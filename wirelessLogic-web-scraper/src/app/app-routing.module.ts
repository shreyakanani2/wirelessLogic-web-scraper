import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScraperComponent } from './scraper/scraper.component';

const routes: Routes = [
  {
    path: '',
    component: ScraperComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
