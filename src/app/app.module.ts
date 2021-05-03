import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FadeDirective } from './directives/fade.directive';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { HotkeyModule } from 'angular2-hotkeys';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { OptionsComponent } from './options/options.component';
import { AgeComponent } from './age/age.component';
import { FormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NotificationComponent } from './notification/notification.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {MatTooltipModule} from '@angular/material/tooltip';
import { ActivityComponent } from './activity/activity.component';
import { CloseDirective } from './directives/close.directive'; 
import { MatRippleModule } from '@angular/material/core';
import { HeaderComponent } from './header/header.component';
@NgModule({
  declarations: [
    AppComponent,
    FadeDirective,
    OptionsComponent,
    AgeComponent,
    NotificationComponent,
    ActivityComponent,
    CloseDirective,
    HeaderComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HotkeyModule.forRoot(),
    MatIconModule,
    MatButtonModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
    MatRippleModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [NotificationComponent]
})
export class AppModule { }
