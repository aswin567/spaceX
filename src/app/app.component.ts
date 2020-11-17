import { Component } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isLoading$: BehaviorSubject<boolean>;

  constructor(private router: Router, private appService: AppService){
    this.router.events.subscribe((event: any) => {
      switch (true) {
        case event instanceof NavigationStart: {
          this.appService.isLoading$.next(true);
          break;
        }

        case event instanceof NavigationEnd:
        case event instanceof NavigationCancel:
        case event instanceof NavigationError: {
          this.appService.isLoading$.next(false);
          break;
        }
        default: {
          break;
        }
      }
    });
    this.isLoading$ = this.appService.isLoading$;
  }
}
