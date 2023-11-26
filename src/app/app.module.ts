import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppLayoutModule } from './modules/shared/app-layout/app-layout.module';
import { HttpClientModule } from '@angular/common/http';
import { ConfigurationService } from './services/configuration.service';
import { LocalStoreManager } from './services/local-store-manager.service';
import { OidcHelperService } from './services/oidc-helper.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppLayoutModule,
    HttpClientModule
  ],
  providers: [ConfigurationService,
    LocalStoreManager,
    OidcHelperService],
  bootstrap: [AppComponent]
})
export class AppModule { }
