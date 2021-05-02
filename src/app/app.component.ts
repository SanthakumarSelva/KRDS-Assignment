import { Component } from '@angular/core';
import { take } from 'rxjs/operators';
import { SharedService } from './shared/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  features: Array<{}> = [];
  mainLogo = null;
  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
    // Fetch Data From Api //
    this.sharedService.getProducts().pipe(take(1)).subscribe((data) => {
      console.log(data);
      const apiData = data as any;
      if (apiData && apiData.features && apiData.logo) { // Checks features and logo exists in response
        this.mainLogo = apiData.logo;
        this.features = apiData.features;
        console.log(this.features);
      }
    });
  }
}
