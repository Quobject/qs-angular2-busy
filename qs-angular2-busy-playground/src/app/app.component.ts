import { Component } from '@angular/core';
import { QsAngular2BusyModule, BusyConfig } from 'qs-angular2-busy';

import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public static busyConfig: BusyConfig;
  busy: Promise<any>;

  ngOnInit() {
    this.busy = AppComponent.PromiseDelay(2000);
  }


  public static PromiseDelay(timeout = 1000): Promise<any> {
    return of().pipe(delay(timeout)).toPromise();
  }
}
