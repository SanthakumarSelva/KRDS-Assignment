import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { FeaturesComponent } from './features/features.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    HeaderComponent,
    FeaturesComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    NgbModule
  ],
  exports: [HeaderComponent,
    FeaturesComponent
  ]
})
export class SharedModule { }
