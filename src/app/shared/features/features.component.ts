import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnChanges {
  @Input() features!: Array<any>;
  constructor() { }

  ngOnChanges(): void {
    console.log(this.features);
  }

}
