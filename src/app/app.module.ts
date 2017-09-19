import { SectionFiveComponent } from './templates/sectionFive/sectionFive.component';
import { SectionFourComponent } from './templates/sectionFour/sectionFour.component';
import { SectionThreeComponent } from './templates/sectionThree/sectionThree.component';
import { SectionTwoComponent } from './templates/sectionTwo/sectionTwo.component';
import { SectionOneComponent } from './templates/sectionOne/sectionOne.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    SectionOneComponent,
    SectionTwoComponent,
    SectionThreeComponent,
    SectionFourComponent,
    SectionFiveComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
