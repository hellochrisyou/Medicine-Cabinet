import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { VideosComponent } from './pages/videos/videos.component';
import { SocialComponent } from './pages/social/social.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OVERLAY_PROVIDERS, OverlayModule } from '@angular/cdk/overlay';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    VideosComponent,
    SocialComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    OverlayModule
  ],
  providers: [OVERLAY_PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule { }
