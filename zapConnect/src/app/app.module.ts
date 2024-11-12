import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, LOCALE_ID } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { PoModule, PoPageModule } from '@po-ui/ng-components';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsComponentModule } from './assets/pages/forms/forms.module';
import { ThemeComponentModule } from './assets/pages/Theme/theme.module';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    PoModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsComponentModule,
    ThemeComponentModule,
    FormsModule,
    PoPageModule,
    RouterModule.forRoot([]),
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt' },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
