import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnChanges {
@Input() logo: any;
  constructor() { }

  ngOnChanges() {
console.log(this.logo);

  }

}
