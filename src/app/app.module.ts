import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import { BasicFormComponent } from './basic-form/basic-form.component';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule, FormsModule  } from '@angular/forms';
import { NestedFormComponent } from './nested-form/nested-form.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { FormWithValidationComponent } from './form-with-validation/form-with-validation.component';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    BasicFormComponent,
    NestedFormComponent,
    DynamicFormComponent,
    FormWithValidationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule, FormsModule,
    MatToolbarModule, MatSelectModule, MatButtonModule, MatCheckboxModule, MatChipsModule, MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
