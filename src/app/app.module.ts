import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/* Routing Module */
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

/* Angular Materials */
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatSidenavModule,
  MatSidenavContent,
  MatSidenav,
  MatButtonModule,
  MatCardModule,
  MatMenuModule,      
  MatToolbarModule,      
  MatIconModule,      
  MatFormFieldModule,      
  MatInputModule,      
  MatDatepickerModule,      
  MatDatepicker,      
  MatNativeDateModule,      
  MatRadioModule,      
  MatSelectModule,      
  MatOptionModule,      
  MatSlideToggleModule,
  ErrorStateMatcher,
  ShowOnDirtyErrorStateMatcher,
} from '@angular/material';

/* Form Module */
import { FormsModule,ReactiveFormsModule } from '@angular/forms'; 

/* Components */
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HomecomponentComponent } from './homecomponent/homecomponent.component';
import { ContactComponent } from './contact/contact.component';
import { FormsComponent } from './contact/forms/forms.component';
import { ViewDataComponent } from './contact/view-data/view-data.component';

/* Ag-grid Module */
import { AgGridModule } from 'ag-grid-angular';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomecomponentComponent,
    ContactComponent,
    FormsComponent,
    ViewDataComponent
  ],
  imports: [
    BrowserModule,
    AgGridModule.withComponents([]),
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatButtonModule,
    MatCardModule, 
    FormsModule,      
    ReactiveFormsModule,      
    MatButtonModule,      
    MatMenuModule,      
    MatToolbarModule,      
    MatIconModule,      
    MatCardModule,      
    BrowserAnimationsModule,      
    MatFormFieldModule,      
    MatInputModule,      
    MatDatepickerModule,      
    MatNativeDateModule,      
    MatRadioModule,      
    MatSelectModule,      
    MatOptionModule,      
    MatSlideToggleModule,
    MatFormFieldModule,
    MatNativeDateModule 
  ],
  exports: [      
    MatButtonModule,      
    MatMenuModule,      
    MatToolbarModule,      
    MatIconModule,      
    MatCardModule,      
    BrowserAnimationsModule,      
    MatFormFieldModule,      
    MatInputModule,      
    MatDatepickerModule,      
    MatNativeDateModule,      
    MatRadioModule,      
    MatSelectModule,      
    MatOptionModule,      
    MatSlideToggleModule  ,
    MatInputModule,
    MatFormFieldModule    
  ],
  providers: [MatSidenavContent],
  bootstrap: [AppComponent]
})
export class AppModule { }
