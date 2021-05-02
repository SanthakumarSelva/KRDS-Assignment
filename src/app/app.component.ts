import { Component, HostListener } from '@angular/core';
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
  isDesktop: Boolean = true; 
  constructor(private sharedService: SharedService) { 
    const innerWidth = window.screen.width;
      if (innerWidth > 640) {
        this.isDesktop = true;
      } else {
        this.isDesktop = false;
      }
  }

  ngOnInit(): void {
    // Fetch Data From Api //
    this.sharedService.getProducts().pipe(take(1)).subscribe((data) => {
      const apiData = data as any;
      if (apiData && apiData.features && apiData.logo) { // Checks features and logo exists in response
        this.mainLogo = apiData.logo;
        this.features = apiData.features;
      }
    });
  }

  @HostListener('window:scroll', ['$event']) scrollHandler($event: any) {
    if (this.isDesktop) {
      const navBar = document.getElementById('sticky-nav');
      if (navBar && window.pageYOffset > 40) {
        navBar.classList.add('nav-bg');
      } else if (navBar) {
        navBar.classList.remove('nav-bg');
      }
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
      const innerWidth = window.screen.width;
      if (innerWidth > 640) {
        this.isDesktop = true;
      } else {
        this.isDesktop = false;
      }
    }
}
