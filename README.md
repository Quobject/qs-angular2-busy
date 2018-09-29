# qs-angular2-busy

from https://github.com/devyumao/angular2-busy

created for Angular 6 using 
[Library support in Angular CLI 6](https://github.com/angular/angular-cli/wiki/stories-create-library)

[npm](https://www.npmjs.com/package/qs-angular2-busy)

```bash
npm i qs-angular2-busy
```

### angular.json
```json
...
    "styles": [
        "src/styles.css",
        "node_modules/qs-angular2-busy/styles/busy.css"
      ],
...
```

### app.module.ts
```ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { QsAngular2BusyModule } from 'qs-angular2-busy';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    QsAngular2BusyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

### app.component.ts
```ts
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
  title = 'app';  
  busy: Promise<any>;

  ngOnInit() {
    this.busy = AppComponent.PromiseDelay(2000);
  }

  public static PromiseDelay(timeout = 1000): Promise<any> {
    return of().pipe(delay(timeout)).toPromise();
  }
}
```

### app.component.html
```html
<div [ngBusy]="{busy: busy, message: 'Loading...', backdrop: false, delay: 200, minDuration: 600}">
  <div style="text-align:center">
    <h1>
      Welcome
    </h1>
  </div>
</div>
```
