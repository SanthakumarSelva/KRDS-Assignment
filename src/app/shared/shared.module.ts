import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { FeaturesComponent } from './features/features.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FeaturesComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [HeaderComponent,
    FeaturesComponent
  ]
})
export class SharedModule { }
